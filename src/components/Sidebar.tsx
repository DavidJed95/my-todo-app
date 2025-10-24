import { lazy } from "react";
import AddTodoForm from "./AddTodoForm";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Button = lazy(() => import("./Button"));
const Sidebar = () => {
  const { login, register, logout, isAuthenticated, isLoading, user } =
    useKindeAuth();

  return (
    <section className="flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] px-[25px] pt-[18px] pb-[28px]">
      <AddTodoForm />
      <section className="mt-auto space-y-2">
        {isLoading ? null : isAuthenticated ? (
          <>
            <p className="text-sm">Logged in as {user?.email}</p>
            <Button buttonType={"secondary"} onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button buttonType={"secondary"} onClick={login}>
              Log in
            </Button>
            <Button buttonType={"secondary"} onClick={register}>
              Register
            </Button>
          </>
        )}
      </section>
      {/* <form className="mt-[.6rem] border rounded-[4px]" action="https://search.yahoo.com/search" method="GET" target="_blank">
  <input className="border m-1 w-full text-center cursor-pointer" type="text" name="p" placeholder="Search with Yahoo" required />
  <button className="border block mx-1 rounded-[3px] my-1 w-full cursor-pointer" type="submit">Search</button>
</form> */}
    </section>
  );
};

export default Sidebar;
