import StyledSkill from "./styles/Skill.style";

const Skill = (props) => {
  const { name, Logo, position } = props;

  return (
    <StyledSkill position={position}>
      <Logo />
      <h3>{name}</h3>
    </StyledSkill>
  );
};

export default Skill;
