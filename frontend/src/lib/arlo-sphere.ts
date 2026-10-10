import * as THREE from "three";

/**
 * A genuine rotating 3D sphere for Arlo's launcher specifically. Every
 * other instance of the character on the page (panel header avatar,
 * message-bubble avatars) stays the flat 2D SVG — this is the one
 * place actual 3D rendering happens, because a flat icon fundamentally
 * can't rotate 360° and stay recognizable: past roughly 90° you're
 * looking at the edge of a plane, not "the back of it." A real sphere
 * doesn't have that problem — the eyes are actual 3D objects attached
 * to its surface, so the renderer naturally swings them around and
 * hides them behind the sphere as it turns, the way real geometry
 * behaves, not a CSS approximation of it.
 *
 * Returns a cleanup function that disposes everything WebGL-related —
 * call it if the launcher is ever removed from the page (it currently
 * isn't, since Arlo persists for the whole session, but it's cheap
 * insurance against a leak if that ever changes).
 */
export function initArloSphere(mount: HTMLElement): () => void {
  const size = 72; // css px — matches the launcher button's own size
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  const canvas = document.createElement("canvas");
  canvas.setAttribute("aria-hidden", "true");
  mount.appendChild(canvas);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 12);
  camera.position.z = 5.4;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(dpr);
  renderer.setSize(size, size, false);

  function accentColor(): number {
    const raw = getComputedStyle(document.documentElement).getPropertyValue("--color-accent-strong").trim();
    return new THREE.Color(raw || "#17a674").getHex();
  }

  const group = new THREE.Group();
  scene.add(group);

  const sphereGeo = new THREE.SphereGeometry(1.2, 48, 48);
  const sphereMat = new THREE.MeshStandardMaterial({ color: accentColor(), roughness: 0.45, metalness: 0.08 });
  group.add(new THREE.Mesh(sphereGeo, sphereMat));

  function addEye(x: number) {
    const eye = new THREE.Group();
    eye.add(
      new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 }),
      ),
    );
    const pupil = new THREE.Mesh(
      new THREE.SphereGeometry(0.14, 20, 20),
      new THREE.MeshStandardMaterial({ color: 0x0a0a0a, roughness: 0.5 }),
    );
    pupil.position.z = 0.14;
    eye.add(pupil);
    eye.position.set(x, 0.07, 1.03);
    group.add(eye);
  }
  addEye(-0.42);
  addEye(0.42);

  scene.add(new THREE.AmbientLight(0xffffff, 0.7));
  const key = new THREE.DirectionalLight(0xffffff, 0.85);
  key.position.set(2, 2.5, 3);
  scene.add(key);

  // theme can change after this has already initialized — keep the
  // sphere's own color in sync rather than freezing whatever it was
  // the moment the page loaded.
  const themeObserver = new MutationObserver(() => {
    sphereMat.color.setHex(accentColor());
  });
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let targetX = 0;
  let targetY = 0;
  function onMouseMove(event: MouseEvent) {
    targetX = (event.clientX / window.innerWidth) * 2 - 1;
    targetY = (event.clientY / window.innerHeight) * 2 - 1;
  }
  if (!reduceMotion) window.addEventListener("mousemove", onMouseMove);

  let raf = 0;
  let idle = 0;

  function tick() {
    idle += 0.006;
    const idleYaw = Math.sin(idle) * 0.55;
    // damped ease toward (idle wander + cursor offset) each frame, not
    // a hard jump to the target — this is what makes it glide rather
    // than snap when the cursor moves.
    group.rotation.y += (idleYaw + targetX * 0.7 - group.rotation.y) * 0.06;
    group.rotation.x += (-targetY * 0.4 - group.rotation.x) * 0.06;
    renderer.render(scene, camera);
    raf = requestAnimationFrame(tick);
  }

  if (reduceMotion) {
    renderer.render(scene, camera); // one static frame, no loop
  } else {
    tick();
  }

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("mousemove", onMouseMove);
    themeObserver.disconnect();
    renderer.dispose();
    sphereGeo.dispose();
    sphereMat.dispose();
    canvas.remove();
  };
}
