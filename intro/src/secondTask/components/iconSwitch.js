
function IconSwitch({icon, onSwitch}) {
    return (
      <button onClick={onSwitch} class="material-icons shop-card-btn">{icon}</button>
    );
}

export {IconSwitch};