import React from 'react';
import { Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';
import FormInput from './FormInput';
import { EmailFormProps } from '../../types/auth';

export default function EmailForm({ mode, formData, errors, isLoading, onChange }: EmailFormProps) {
  return (
    <div className="space-y-4">
      <FormInput
        id="email"
        name="email"
        type="email"
        label="Email address"
        icon={<Mail className="h-5 w-5 text-gray-400" />}
        value={formData.email}
        error={errors.email}
        onChange={onChange}
      />

      <FormInput
        id="password"
        name="password"
        type="password"
        label="Password"
        icon={<Lock className="h-5 w-5 text-gray-400" />}
        value={formData.password}
        error={errors.password}
        onChange={onChange}
      />

      {mode === 'signup' && (
        <FormInput
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          icon={<Lock className="h-5 w-5 text-gray-400" />}
          value={formData.confirmPassword}
          error={errors.confirmPassword}
          onChange={onChange}
        />
      )}

      {mode === 'signin' && (
        <div className="flex items-center justify-end">
          <button
            type="button"
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            Forgot password?
          </button>
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <>
            {mode === 'signin' ? 'Sign in' : 'Create account'}
            <ArrowRight className="h-5 w-5" />
          </>
        )}
      </button>
    </div>
  );
}