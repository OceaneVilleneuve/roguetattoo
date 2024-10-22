import styled from "styled-components";

const ButtonToggle = styled.button`
  text-decoration: none;
  border: none;
  background-color: transparent;
`;
const IconWrapper = styled.span`
  margin-right: 8px; /* Adjust spacing as needed */
`;

const Item = ({ id, label, icon: Icon, onMouseEnter, onMouseLeave, style }) => {
  const scrollToComponent = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={style}>
      <ButtonToggle
        onClick={() => scrollToComponent(id)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {Icon && (
          <IconWrapper>
            <Icon />
          </IconWrapper>
        )}
        {label}
      </ButtonToggle>
    </div>
  );
};

export default Item;
