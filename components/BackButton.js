import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export default function BackButton({ linkTo }) {
  return (
    <Link href={linkTo}>
      <AnchorTag>
        <Image
          alt="A go-back button"
          src="https://res.cloudinary.com/drthrskm2/image/upload/v1665657772/capstone-project/icons/backbutton_jz7pi7.svg"
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
  position: fixed;
  z-index: 11;
`;
