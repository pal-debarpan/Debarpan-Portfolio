const IslandGuide = ({ onDismiss }) => (
  <div className="island-guide" role="dialog" aria-modal="true" aria-labelledby="island-guide-title" aria-describedby="island-guide-description">
    <div className="island-guide__glow island-guide__glow--one" />
    <div className="island-guide__glow island-guide__glow--two" />
    <div className="island-guide__card">
      <span className="island-guide__eyebrow">Welcome aboard</span>
      <div className="island-guide__compass" aria-hidden="true"><span>↔</span></div>
      <h1 id="island-guide-title">My portfolio is an island to explore.</h1>
      <p id="island-guide-description">Drag left or right to rotate the island. Each stop unlocks a small island of clickable content—my story, work, and a way to get in touch.</p>
      <button type="button" className="island-guide__button" onClick={onDismiss}>OK, let&apos;s explore</button>
      <span className="island-guide__hint">You can also use the ← → arrow keys.</span>
    </div>
  </div>
);

export default IslandGuide;
