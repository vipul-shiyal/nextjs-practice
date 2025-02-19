export default function ComplexDashboard({
  children,
  users,
  revenue,
  notifications,
  login
}: {
  children: React.ReactNode
  users: React.ReactNode
  revenue: React.ReactNode
  notifications: React.ReactNode
  login: React.ReactNode

}) {
  const isLogin = false; //conditional routing 
  return isLogin ? (
    <>
      <div>{children}</div>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: 'flex', flex: 1}}>
          {notifications}
        </div>
        
      </div>
      {/* <UserAnalytics />
      <RevenyueAnalytics />
      <Notification /> */}
    </>
  ): <div>{login}</div>
}