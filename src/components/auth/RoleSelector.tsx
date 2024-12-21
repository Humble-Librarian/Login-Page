import React from 'react';
import { UserRound, Users } from 'lucide-react';
import { RoleSelectorProps } from '../../types/auth';

export default function RoleSelector({ selectedRole, onChange }: RoleSelectorProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">I want to be a:</label>
      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => onChange('mentee')}
          className={`flex items-center justify-center gap-2 p-4 rounded-lg border ${
            selectedRole === 'mentee'
              ? 'border-blue-500 bg-blue-50 text-blue-700'
              : 'border-gray-300 hover:bg-gray-50'
          } transition-colors`}
        >
          <UserRound className="h-5 w-5" />
          <span className="font-medium">Mentee</span>
        </button>
        <button
          type="button"
          onClick={() => onChange('mentor')}
          className={`flex items-center justify-center gap-2 p-4 rounded-lg border ${
            selectedRole === 'mentor'
              ? 'border-blue-500 bg-blue-50 text-blue-700'
              : 'border-gray-300 hover:bg-gray-50'
          } transition-colors`}
        >
          <Users className="h-5 w-5" />
          <span className="font-medium">Mentor</span>
        </button>
      </div>
    </div>
  );
}