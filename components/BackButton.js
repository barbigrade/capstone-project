import styled from 'styled-components';
import Link from 'next/link';

import Image from 'next/image';

export default function BackButton({ linkTo }) {
  return (
    <Link href={linkTo}>
      <a>
        <Image
          alt="A go-back button"
          src="../public/backbutton"
          layout="fixed"
          width={48}
          height={48}
        />
      </a>
    </Link>
  );
}
