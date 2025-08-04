import { useState } from 'react';

export default function Notification() {
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const handleNotificationChange = (isShow: boolean) => {
    setShowNotification(isShow);
  };

  return (
    <>
      {showNotification && <p>📢 새로운 알림이 도착했습니다.</p>}
      {!showNotification && (
        <button onClick={() => handleNotificationChange(true)}>알림 보기</button>
      )}
      {showNotification && (
        <button onClick={() => handleNotificationChange(false)}>알림 닫기</button>
      )}
    </>
  );
}
