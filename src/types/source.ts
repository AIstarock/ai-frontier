export type SourceVerification = 'official' | 'third-party' | 'in-house';

export type ItemSource = {
  url: string;
  label: string;
  verification: SourceVerification;
};
