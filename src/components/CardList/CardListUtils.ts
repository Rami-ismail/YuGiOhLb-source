import { IBanlistInfo } from "../../models/ICard";
import banSign from "../../assets/images/banSign.png"
import limitedSign from "../../assets/images/limitedSign.png"
import semilimitedSign from "../../assets/images/semilimitedSign.png"
export const moreCardsFetching = async () => {
  try {
    //   const response = await get(dataStatus.next_page);
    //   setDataStatus(response.data.meta);
    //   setCardsList(cardsList.concat(response.data.data));
  } catch (ex) {
    console.log("Fetch cards error!");
  }
};

export const banListSignConverter = (banlistInfo: IBanlistInfo) => {
  switch (banlistInfo.ban_tcg) {
    case "Forbidden":
      return banSign;
    case "Limited":
      return limitedSign;
    case "Semi-Limited":
      return semilimitedSign;
    default:
      return;
  }
};
