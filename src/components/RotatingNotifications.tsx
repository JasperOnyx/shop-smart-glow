import { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';

const names = [
  'James', 'Olivia', 'Ethan', 'Amelia', 'Daniel', 'Sophie',
  'Harry', 'Grace', 'Jack', 'Chloe', 'William', 'Emily',
  'George', 'Lily', 'Thomas', 'Hannah'
];

const messageTemplates = [
  'just claimed ShopSmart £750 Amazon Reward',
  'just accessed ShopSmart £750 Amazon Reward',
  'just unlocked ShopSmart £750 Amazon Reward',
];

export const RotatingNotifications = () => {
  const [currentNotification, setCurrentNotification] = useState<{
    name: string;
    message: string;
  } | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const getRandomNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomTemplate = messageTemplates[Math.floor(Math.random() * messageTemplates.length)];
      return {
        name: randomName,
        message: randomTemplate,
      };
    };

    const showNotification = () => {
      const notification = getRandomNotification();
      setCurrentNotification(notification);
      setIsVisible(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Wait 8 seconds initially, then show first notification
    const initialTimeout = setTimeout(() => {
      showNotification();

      // Then repeat: 5s visible + 8s hidden = 13s cycle
      const interval = setInterval(() => {
        showNotification();
      }, 13000);

      return () => clearInterval(interval);
    }, 8000);

    return () => clearTimeout(initialTimeout);
  }, []);

  if (!currentNotification || !isVisible) return null;

  return (
    <div
      className="fixed bottom-6 left-6 z-50 max-w-sm"
      style={{
        animation: 'notification-enter 0.3s ease-out forwards',
        opacity: isVisible ? 0.98 : 0,
      }}
    >
      <div className="backdrop-premium rounded-xl border border-brand/30 glow-brand p-4 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-brand" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-foreground/90 leading-tight">
              <span className="font-semibold text-brand">{currentNotification.name}</span>{' '}
              {currentNotification.message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
