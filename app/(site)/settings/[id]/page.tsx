// "use client";

// import { AccountContainer } from "@/app/components/settings/Account";
// import { Sidebar } from "@/app/components/settings/Sidebar";
// import { Session } from "next-auth";
// import { useRouter } from "next/router";

// interface SessionProps {
//   session: Session | null;
// }

// const SettingPage = () => {
//   const router = useRouter();

//   const { id } = router.query;

//   const renderContent = () => {
//     switch (id) {
//       case "account":
//         return <AccountContainer />;
//       default:
//         return <div>Unknown settings section</div>;
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex-1 p-4">{renderContent()}</div>
//     </div>
//   );
// };

// export default SettingPage;
