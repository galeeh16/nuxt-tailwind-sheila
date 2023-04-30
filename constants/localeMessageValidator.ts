// Required
export const requiredMsg = (lang: string, attr: string) =>
  lang === 'id' ? `Harap isi ${attr}` : `The ${attr} field is required`;

// Numeric
export const numericMsg = (lang: string, attr: string) =>
  lang === 'id' ? `${attr} harus berupa angka` : `The ${attr} must be a number`;

// Min Length
export const minLengthMsg = (lang: string, attr: string, params: any) =>
  lang === 'id'
    ? `${attr} minimal ${params.min} karakter`
    : `The ${attr} must be at least ${params.min} characters`;

// Max Length
export const maxLengthMsg = (lang: string, attr: string, params: any) =>
  lang === 'id'
    ? `${attr} maksimal ${params.max} karakter`
    : `The ${attr} may not be greater than ${params.max} characters`;

// Email
export const emailMsg = (lang: string, attr: string) =>
  lang === 'id'
    ? `${attr} harus berupa alamat surel yang valid`
    : `The ${attr} must be a valid email address`;
