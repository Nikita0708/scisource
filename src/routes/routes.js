import Chat from "../pages/Chat/Chat";
import CreateProject from "../pages/CreateProject/CreateProject";
import MainReg from "../pages/MainReg/MainReg";
import MainUnreg from "../pages/MainUnreg/MainUnreg";
import MyProjects from "../pages/MyProjects/MyProjects";
import ProjectApply from "../pages/PojectApply/ProjectApply";
import ProfileEdit from "../pages/ProfileEdit/ProfileEdit";
import ProjectEdit from "../pages/ProjectEdit/ProjectEdit";
import ProjectResponses from "../pages/ProjectResponses/ProjectResponses";
import Respond from "../pages/Respond/Respond";
import UserProfile from "../pages/UserProfile/UserProfile";

export const MAIN_UNREG = "/";
export const MAIN_REG = "/home";
export const PROJECT_APPLY = "/apply";
export const CREATE_PROJECT = "/create";
export const PROJECT_EDIT = "/edit";
export const PROJECT_RESPONSES = "/responses";
export const PROJECT_RESPONSE = "/respond";
export const USER_PROFILE = "/profile";
export const CHAT = "/chat";
export const PROFILE_EDIT = "/editprofile";
export const MY_PROJECTS = "/myprojects";

export const AppRoutes = [
    {
        path: MAIN_UNREG,
        element: <MainUnreg />,
    },
    {
        path: MAIN_REG,
        element: <MainReg />,
    },
    {
        path: PROJECT_APPLY,
        element: <ProjectApply />,
    },
    {
        path: CREATE_PROJECT,
        element: <CreateProject />,
    },
    {
        path: PROJECT_EDIT,
        element: <ProjectEdit />,
    },
    {
        path: PROJECT_RESPONSES,
        element: <ProjectResponses />,
    },
    {
        path: USER_PROFILE,
        element: <UserProfile />,
    },
    {
        path: PROFILE_EDIT,
        element: <ProfileEdit />,
    },
    {
        path: CHAT,
        element: <Chat />,
    },
    {
        path: MY_PROJECTS,
        element: <MyProjects />,
    },
    {
        path: PROJECT_RESPONSE,
        element: <Respond />,
    },
];
