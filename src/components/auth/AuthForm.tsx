import React, { useState } from 'react';
import { AuthFormProps, FormData } from '../../types/auth';
import SocialSignIn from './SocialSignIn';
import EmailForm from './EmailForm';
import RoleSelector from './RoleSelector';
import FormDivider from './FormDivider';

export default function AuthForm() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
    role: 'mentee'
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const newErrors = await validateForm(formData, mode);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Handle authentication here
    }

    setIsLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
        {mode === 'signin' ? 'Welcome Back' : 'Create Account'}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <SocialSignIn />
        <FormDivider />
        
        {mode === 'signup' && (
          <RoleSelector
            selectedRole={formData.role}
            onChange={(role) => setFormData(prev => ({ ...prev, role }))}
          />
        )}

        <EmailForm
          mode={mode}
          formData={formData}
          errors={errors}
          isLoading={isLoading}
          onChange={handleInputChange}
        />
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        {mode === 'signin' ? "Don't have an account?" : 'Already have an account?'}
        {' '}
        <button
          type="button"
          onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
          className="font-medium text-blue-600 hover:text-blue-500"
        >
          {mode === 'signin' ? 'Sign up' : 'Sign in'}
        </button>
      </p>
    </div>
  );
}