import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export default function BackButton({ linkTo }) {
  return (
    <Link href={linkTo}>
      <AnchorTag>
        <Image
          alt="A go-back button"
          src="/backbutton.svg"
          layout="fixed"
          width={48}
          height={48}
        />
      </AnchorTag>
    </Link>
  );
}

const AnchorTag = styled.a`
  top: 0.6rem;
  margin-left: 0.5rem;
  position: absolute;
`;
