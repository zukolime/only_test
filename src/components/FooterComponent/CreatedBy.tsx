import { CreatedByLink, CreatedByWrapper } from './CreatedBy.styled';

export const CreatedBy = () => {
  return (
    <CreatedByWrapper>
      Created by{' '}
      <CreatedByLink
        href='https://unknown-projectures.vercel.app'
        target='_blank'
        rel='noopener noreferrer'>
        limeweb
      </CreatedByLink>
    </CreatedByWrapper>
  );
};
