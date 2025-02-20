import { createFileRoute } from '@tanstack/react-router';
import { useState, ChangeEvent, useRef, useCallback, memo } from 'react';

type FormSection = 'firstName' | 'lastName' | 'phoneNumber';

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  profilePicture: string;
}

export const Route = createFileRoute('/profile/')({
  component: RouteComponent,
});

function RouteComponent() {
  const [isEditing, setIsEditing] = useState(false);
  const [editSection, setEditSection] = useState<FormSection | ''>('');
  const [showImageOptions, setShowImageOptions] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: 'Jane',
    lastName: 'Doe',
    phoneNumber: '',
    email: 'jane.doe@example.com',
    profilePicture: 'https://images.unsplash.com/photo-1654900168832-a59290b01d77?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  });
  const [inputError, setInputError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleEdit = useCallback((section: FormSection) => {
    setIsEditing(true);
    setEditSection(section);
    setInputError('');
  }, []);

  const handleCancel = useCallback(() => {
    setIsEditing(false);
    setEditSection('');
    setInputError('');
    setShowImageOptions(false);
  }, []);

  const handleSave = useCallback(async () => {
    try {
      // Phone number validation
      if (editSection === 'phoneNumber' && formData.phoneNumber.length !== 10) {
        setInputError('Phone number must be 10 digits');
        return;
      }

      setIsEditing(false);
      setEditSection('');
      setInputError('');
      setShowImageOptions(false);
    } catch {
      setInputError('Failed to save changes. Please try again.');
    }
  }, [editSection, formData.phoneNumber]);

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (editSection) {
      let value = e.target.value;
      
      // Phone number specific validation
      if (editSection === 'phoneNumber') {
        // Remove non-digit characters
        value = value.replace(/\D/g, '');
        // Limit to 10 digits
        value = value.slice(0, 10);
      }

      setFormData(prev => ({
        ...prev,
        [editSection]: value
      }));
    }
  }, [editSection]);

  const handleImageAction = useCallback((action: 'upload' | 'remove') => {
    if (action === 'remove') {
      setFormData(prev => ({ ...prev, profilePicture: '' }));
      setShowImageOptions(false);
    } else if (action === 'upload') {
      fileInputRef.current?.click();
      setShowImageOptions(false);
    }
  }, []);

  const handleFileUpload = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData(prev => ({ ...prev, profilePicture: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const EditField = memo(() => (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <div>
        <label className="text-gray-600 font-medium block mb-2">
          {editSection === 'firstName' && 'First Name'}
          {editSection === 'lastName' && 'Last Name'}
          {editSection === 'phoneNumber' && 'Phone Number'}
        </label>
        <input
          value={editSection ? formData[editSection] : ''}
          onChange={handleInputChange}
          className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-black"
          type={editSection === 'phoneNumber' ? 'tel' : 'text'}
          autoFocus
          maxLength={editSection === 'phoneNumber' ? 10 : undefined}
          pattern={editSection === 'phoneNumber' ? '[0-9]{10}' : undefined}
        />
      </div>
      {inputError && <p className="text-red-500 text-sm mt-1">{inputError}</p>}
      <div className="flex justify-end gap-3 mt-4">
        <button
          onClick={handleSave}
          className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium shadow-sm"
        >
          Save changes
        </button>
        <button
          onClick={handleCancel}
          className="px-5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors font-medium"
        >
          Cancel
        </button>
      </div>
    </div>
  ));

  const ProfileImageOptions = memo(() => (
    <div className="absolute bottom-0 right-0 bg-white rounded-lg shadow-lg p-4 w-48 z-10">
      <button
        onClick={() => handleImageAction('upload')}
        className="w-full text-left p-2 hover:bg-gray-50 rounded-md text-black"
      >
        Upload Photo
      </button>
      <button
        onClick={() => handleImageAction('remove')}
        className="w-full text-left p-2 hover:bg-gray-50 rounded-md text-red-600"
      >
        Remove
      </button>
    </div>
  ));

  const ProfileView = memo(() => (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-6">
        <div className="relative h-40 w-40">
          <img
            src={formData.profilePicture || '/default-avatar.png'}
            alt="Profile"
            className="rounded-full object-cover w-full h-full ring-4 ring-purple-100"
          />
          <button 
            onClick={() => setShowImageOptions(!showImageOptions)}
            className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
          {showImageOptions && <ProfileImageOptions />}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {formData.firstName} {formData.lastName}
          </h1>
          <p className="text-gray-600 text-lg mt-1">{formData.email}</p>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Account settings</h2>
        <div className="space-y-4">
          {(['firstName', 'lastName', 'phoneNumber'] as const).map((field) => (
            <button
              key={field}
              onClick={() => handleEdit(field)}
              className="w-full p-4 flex justify-between items-center bg-white hover:bg-gray-50 rounded-xl transition-colors border border-gray-100 shadow-sm hover:shadow-md"
            >
              <div className="space-y-1 text-left">
                <span className="text-gray-500 text-sm font-medium">
                  {field === 'firstName' && 'First Name'}
                  {field === 'lastName' && 'Last Name'}
                  {field === 'phoneNumber' && 'Phone Number'}
                </span>
                <p className="text-gray-900 font-medium">
                  {formData[field] || 'Not set'}
                </p>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
          
          <div className="w-full p-4 bg-gray-50 rounded-xl border border-gray-100">
            <div className="space-y-1 text-left">
              <span className="text-gray-500 text-sm font-medium">Email</span>
              <p className="text-gray-900 font-medium">{formData.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleFileUpload}
          />
          {isEditing ? <EditField key={editSection} /> : <ProfileView />}
        </div>
      </div>
    </div>
  );
}