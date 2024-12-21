import { ReactNode } from 'react';

export type UserRole = 'mentor' | 'mentee';

export interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  role: UserRole;
}

export interface AuthFormProps {
  mode: 'signin' | 'signup';
}

export interface EmailFormProps {
  mode: 'signin' | 'signup';
  formData: FormData;
  errors: Record<string, string>;
  isLoading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface FormInputProps {
  id: string;
  name: string;
  type: string;
  label: string;
  icon: ReactNode;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RoleSelectorProps {
  selectedRole: UserRole;
  onChange: (role: UserRole) => void;
}