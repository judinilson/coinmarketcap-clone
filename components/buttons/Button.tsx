import React from "react";

function Button({ label, onPress }) {
  return (
    <button onClick={onPress} className={styles.button}>
      {label}
    </button>
  );
}

const styles = {
  button: `bg-[#6188FF] px-5 py-2 rounded-lg`,
};

export default Button;
