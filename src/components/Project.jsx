import * as S from './styles/Project.style';

const Project = (props) => {
  const { name, image, altImage, websiteLink, descriptionLink, position } =
    props;

  return (
    <S.StyledProject position={position}>
        <img className='app-image' src={image} alt={altImage} />
      <S.ProjectCaption>
        <h2>{name}</h2>
        <S.ProjectLink href={descriptionLink} target='_blank'>
          View Description
        </S.ProjectLink>
        <S.ProjectLink href={websiteLink} target='_blank'>
          Visit Website
        </S.ProjectLink>
      </S.ProjectCaption>
    </S.StyledProject>
  );
};

export default Project;
