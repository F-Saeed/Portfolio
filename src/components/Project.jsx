import Loader from 'react-loader-spinner';
import * as S from './styles/Project.style';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Project = (props) => {
  const { name, image, altImage, websiteLink, descriptionLink, position } =
    props;

  return (
    <S.StyledProject position={position}>
      <LazyLoadImage
        effect='blur'
        src={image}
        alt={altImage}
        placeholder={
          <Loader type='TailSpin' color='#00BFFF' height={10} width={10} />
        }
      />
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
