import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src="/assets/icons/logo.svg"
      alt="Logo"
      width={100}
      height={40}
      priority
      style={{ height: 'auto' }}
    />
  );
} 