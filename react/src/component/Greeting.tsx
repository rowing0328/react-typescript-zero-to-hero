import GuestView from './GuestView.tsx';

export default function Greeting({ isLoggedIn }: { isLoggedIn: boolean }) {
  if (isLoggedIn) {
    return null;
    // return (
    //   <>
    //     <UserView />
    //     <UserInfoView />
    //   </>
    // );
  } else return <GuestView />;
}
