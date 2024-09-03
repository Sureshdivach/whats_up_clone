import "./side.css";
import { LuMessageSquarePlus } from "react-icons/lu";
import { HiOutlineDotsVertical, HiOutlineStatusOnline } from "react-icons/hi";
import { IoSearch, IoSettingsOutline } from "react-icons/io5";
import { SiGooglemessages } from "react-icons/si";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { MdOutlineGroups } from "react-icons/md";
import CommonChatDetails from "../../common/chat_list/SideBarChat";

const SideObj = {
  chats: [
    {
      id: "1",
      image: "https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/117574169_171003451253114_3994144849682101938_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIN0YRKhgU2pKGfO8fScltR35TWzMUCwid_ABNP-xOTiW&oe=66E28A86&_nc_sid=5e03e0&_nc_cat=111",
      name: "Ptc Line Jaipur",
      details: "abc",
      time: "04.30",
    },
    {
      id: "2",
      image: "https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/394193721_2754504514705525_5478513650949897062_n.jpg?ccb=11-4&oh=01_Q5AaIIp4vEDJRZB_eyMnf20YNuSPBvOd7Wi8dGxLluHUcfxu&oe=66E2A96E&_nc_sid=5e03e0&_nc_cat=102",
      name: "Ashok Nitarwal TCG SCRB",
      details: "~ॐ श्री श्याम देवाय नमः",
      time: "10.30",
    },
    {
      id: "3",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLH8VhnCVFRxsoEugCvqoE_jACJ_JhbEetdDJCsVzBQ1eYj0TBYCkdUjzmZZnhu4BjSI&usqp=CAU",
      name: "PTC Volleyball🏐🏐",
      details: "Group · 32 members",
      time: "Sun",
    },
    {
      id: "4",
      image: "https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/441290071_490648780338855_2216471144661670778_n.jpg?ccb=11-4&oh=01_Q5AaIFa2GGeNgpiKX56ye76aOGwqAHgUciSEtDRkpjAkJNFo&oe=66E2AA48&_nc_sid=5e03e0&_nc_cat=102",
      name: "Suresh Sharma Operator",
      details: "Jay bajrang bali 🙏🙏🙏",
      time: "Mon",
    },
    {
      id: "5",
      image: "https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/294911828_148309731190248_6135247472259843684_n.jpg?ccb=11-4&oh=01_Q5AaIMmHjg_tMIdPlqIFOj3pZJyqzZY5e94VIFEZs35OoybM&oe=66E2B13D&_nc_sid=5e03e0&_nc_cat=109",
      name: "Indian  Police Force🚗🚗",
      details: "Group 1,024 members",
      time: "Tue",
    },
    {
      id: "6",
      image: "https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/254093966_624145731934937_8787895118348829819_n.jpg?ccb=11-4&oh=01_Q5AaILF3101tAK6stCjuengJYO0A3iQYzwpB5uGq0p3BeEXN&oe=66E289F1&_nc_sid=5e03e0&_nc_cat=100",
      name: "पुलिस दूरसंचार परिवार",
      details: "कराये दूरी से संचार👍🏻",
      time: "Sun",
    },
    {
      id: "7",
      image: "https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/414725898_450724871107729_7800877498851362272_n.jpg?ccb=11-4&oh=01_Q5AaII3Ilkgk0z87njQH99TXh_PsAoGSHPpGH9QBIYMO8Qb3&oe=66E29A29&_nc_sid=5e03e0&_nc_cat=105",
      name: "Manoj Operator Shahpura",
      details: "HALSAR",
      time: "12.45",
    },
    {
      id: "8",
      image: "https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/424425308_713233203982430_772859922436215719_n.jpg?ccb=11-4&oh=01_Q5AaIDZjEOdcEVrgYr7naxyAZ4JXdaZ2NiLRkSuoC3B_XCTA&oe=66E2B26D&_nc_sid=5e03e0&_nc_cat=100",
      name: "Ramshing Gujjar Ptc Jaipur",
      details: "Gurjar boy",
      time: "10.30",
    },
    {
      id: "1",
      image: "https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/117574169_171003451253114_3994144849682101938_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIN0YRKhgU2pKGfO8fScltR35TWzMUCwid_ABNP-xOTiW&oe=66E28A86&_nc_sid=5e03e0&_nc_cat=111",
      name: "Ptc Line Jaipur",
      details: "abc",
      time: "04.30",
    },
    {
      id: "2",
      image: "https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/394193721_2754504514705525_5478513650949897062_n.jpg?ccb=11-4&oh=01_Q5AaIIp4vEDJRZB_eyMnf20YNuSPBvOd7Wi8dGxLluHUcfxu&oe=66E2A96E&_nc_sid=5e03e0&_nc_cat=102",
      name: "Ashok Nitarwal TCG SCRB",
      details: "~ॐ श्री श्याम देवाय नमः",
      time: "10.30",
    },
    {
      id: "3",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLH8VhnCVFRxsoEugCvqoE_jACJ_JhbEetdDJCsVzBQ1eYj0TBYCkdUjzmZZnhu4BjSI&usqp=CAU",
      name: "PTC Volleyball🏐🏐",
      details: "Group · 32 members",
      time: "Sun",
    },
    {
      id: "4",
      image: "https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/441290071_490648780338855_2216471144661670778_n.jpg?ccb=11-4&oh=01_Q5AaIFa2GGeNgpiKX56ye76aOGwqAHgUciSEtDRkpjAkJNFo&oe=66E2AA48&_nc_sid=5e03e0&_nc_cat=102",
      name: "Suresh Sharma Operator",
      details: "Jay bajrang bali 🙏🙏🙏",
      time: "Mon",
    },
    {
      id: "5",
      image: "https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/294911828_148309731190248_6135247472259843684_n.jpg?ccb=11-4&oh=01_Q5AaIMmHjg_tMIdPlqIFOj3pZJyqzZY5e94VIFEZs35OoybM&oe=66E2B13D&_nc_sid=5e03e0&_nc_cat=109",
      name: "Indian  Police Force🚗🚗",
      details: "Group 1,024 members",
      time: "Tue",
    },
    {
      id: "6",
      image: "https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/254093966_624145731934937_8787895118348829819_n.jpg?ccb=11-4&oh=01_Q5AaILF3101tAK6stCjuengJYO0A3iQYzwpB5uGq0p3BeEXN&oe=66E289F1&_nc_sid=5e03e0&_nc_cat=100",
      name: "पुलिस दूरसंचार परिवार",
      details: "कराये दूरी से संचार👍🏻",
      time: "Sun",
    },
    {
      id: "7",
      image: "https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/414725898_450724871107729_7800877498851362272_n.jpg?ccb=11-4&oh=01_Q5AaII3Ilkgk0z87njQH99TXh_PsAoGSHPpGH9QBIYMO8Qb3&oe=66E29A29&_nc_sid=5e03e0&_nc_cat=105",
      name: "Manoj Operator Shahpura",
      details: "HALSAR",
      time: "12.45",
    },
    {
      id: "8",
      image: "https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/424425308_713233203982430_772859922436215719_n.jpg?ccb=11-4&oh=01_Q5AaIDZjEOdcEVrgYr7naxyAZ4JXdaZ2NiLRkSuoC3B_XCTA&oe=66E2B26D&_nc_sid=5e03e0&_nc_cat=100",
      name: "Ramshing Gujjar Ptc Jaipur",
      details: "Gurjar boy",
      time: "10.30",
    },
    
  ],
};
const Sidebar = () => {
  return (
    <div className="side_main_container">
      {/* side bar left icon container---------------------------------- */}
      <div className="side_lefticon">
        <div className="first_icon">
          <span>
            <SiGooglemessages title="Chats" />
            <HiOutlineStatusOnline title="Status" />
            <BsFillChatQuoteFill title="channels " />
            <MdOutlineGroups title="communities" />
            <img
              src="https://static.whatsapp.net/rsrc.php/v3/ye/r/W2MDyeo0zkf.png"
              alt=""
              style={{ width: "30px" }}
              title="meta AI"
            />
          </span>
        </div>
        <div className="second_icon">
          <span>
            <IoSettingsOutline title="Setting" />
            <img
              src="https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/421708843_813617650930504_7330324857764675399_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaICYIFt6Q0Cvk1BdPmMDzF90M0nGz3I-ASWz_pGhOLr09&oe=66E29204&_nc_sid=5e03e0&_nc_cat=106"
              style={{ width: "30px", border: "" }}
              alt=""
            />
          </span>
        </div>
      </div>
      {/* sidebar  chat container  start-------------------------------- */}
      <div className="sidebar_container">
        <div className="chat_container">
          <p>Chats</p>
          <span>
            <LuMessageSquarePlus />
            <HiOutlineDotsVertical />
          </span>
        </div>
        <div className="search_container">
          <span>
            <IoSearch />
            <input type="text" placeholder="Search" />
          </span>
        </div>
        <div className="link_container">
          <a href="#" style={{ padding: "0.2rem 1.5rem", color: "green" }}>
            All
          </a>
          <a href="">Unread</a>
          <a href="">Groups</a>
        </div>

        <div className="chats_container">
              <CommonChatDetails chatArr={SideObj.chats} key={SideObj.chats.id}/>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
