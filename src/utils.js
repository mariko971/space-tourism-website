export const activeLink = (ref) => {
  ref.current.style.borderBottomColor = "#fff";
  ref.current.style.color = "#fff";
  ref.current.style.borderBottomWidth = "3px";
  ref.current.style.borderBottomStyle = "solid";
};

export const inActiveLink = (ref) => {
  ref.current.style.borderBottomColor = "none";
  ref.current.style.color = "inherit";
  ref.current.style.borderBottomWidth = "3px";
  ref.current.style.borderBottomStyle = "none";
};
