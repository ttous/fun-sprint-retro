import React from "react";
import "./index.css";
import { Page, PAGES_ORDER, IMember } from "../../types";
import Opening from "../../pages/Opening";
import Header from "../Header";
import Footer from "../Footer";
import Speedboat from "../../pages/Speedboat";
import Cohesion from "../../pages/Cohesion";
import Actions from "../../pages/Actions";
import Esvp from "../../pages/Esvp";
import Members from "../../pages/Members";
import Ending from "../../pages/Ending";

export const MembersContext: React.Context<IMember[]> = React.createContext<
  IMember[]
>([]);

export default function App() {
  const [page, setPage] = React.useState<Page>(PAGES_ORDER[0]);
  const [members, setMembers] = React.useState<IMember[]>([]);

  const currPageIndex: number = PAGES_ORDER.findIndex(
    (pageI) => pageI === page
  );

  return (
    <MembersContext.Provider value={members}>
      <div id="app">
        <Header hideMembers={page === Page.SPEEDBOAT} />

        <div id="app-content">
          {page === Page.OPENING && <Opening />}
          {page === Page.MEMBERS && <Members onSetMembers={setMembers} />}
          {page === Page.COHESION && <Cohesion onSetMembers={setMembers} />}
          {page === Page.SPEEDBOAT && <Speedboat />}
          {page === Page.ACTIONS && <Actions />}
          {page === Page.ESVP && <Esvp onSetMembers={setMembers} />}
          {page === Page.ENDING && <Ending />}
        </div>
        <Footer
          currPage={page}
          onPrev={
            currPageIndex !== 0
              ? () => setPage(PAGES_ORDER[currPageIndex - 1])
              : undefined
          }
          onNext={
            currPageIndex !== PAGES_ORDER.length - 1
              ? () => setPage(PAGES_ORDER[currPageIndex + 1])
              : undefined
          }
        />
      </div>
    </MembersContext.Provider>
  );
}
