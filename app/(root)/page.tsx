import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const Loggedin={firstName:"Rishabh",lastName:"Kartik",email:"rishabhkartik2004@gmail.com"}
  return (
    <>
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={Loggedin?.firstName || "Guest"}
              subtext="Access and manage your accout and transactions efficiently."
            />
            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1250.01}
            />
          </header>
          RECENT TRANSACTIONS
        </div>
        <RightSidebar
          user={Loggedin}
          transactions={[]}
          banks={[{ currentBalance: 1250.0 }, { currentBalance: 97610.0 }]}
        />
      </section>
    </>
  );
}

export default Home