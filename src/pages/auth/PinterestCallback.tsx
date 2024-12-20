import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { exchangePinterestCode } from '@/lib/pinterest';
import { useAccountStore } from '@/lib/store';
import { toast } from 'sonner';

export function PinterestCallback() {
  const navigate = useNavigate();
  const { addAccount, setBoards } = useAccountStore();

  useEffect(() => {
    const handleCallback = async () => {
      const searchParams = new URLSearchParams(window.location.search);
      const code = searchParams.get('code');
      
      if (!code) {
        toast.error('No authorization code received');
        navigate('/dashboard/accounts');
        return;
      }

      try {
        const { token, user } = await exchangePinterestCode(code);
        
        await addAccount({
          id: user.username,
          user,
          token,
          lastRefreshed: Date.now(),
        });

        toast.success('Pinterest account connected successfully!');
        navigate('/dashboard/accounts');
      } catch (error) {
        console.error('Error handling Pinterest callback:', error);
        toast.error('Failed to connect Pinterest account');
        navigate('/dashboard/accounts');
      }
    };

    handleCallback();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-600"></div>
    </div>
  );
}
