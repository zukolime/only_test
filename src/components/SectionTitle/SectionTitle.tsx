import { SectionHeader, Title } from './SectionTitle.styled';

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <SectionHeader>
      <Title>{title}</Title>
    </SectionHeader>
  );
};
