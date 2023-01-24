import { IInfoCard } from "./types";
import "./InfoCard.scss";

function InfoCard({ children }: IInfoCard) {
  return <div className="card-container p-4">{children}</div>;
}

export default InfoCard;
