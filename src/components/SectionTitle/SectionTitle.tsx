import { SectionHeader, Title } from '@/components/SectionTitle/SectionTitle.styled';

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <SectionHeader>
      <Title>{title}</Title>
    </SectionHeader>
  );
};
