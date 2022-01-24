import TextFooter from "./TextFooter";
import TextHeader from "./TextHeaders";
import TextTimeline from "./TextTimeline";

export default function TextSection() {
  return (
       <div className="text">
       <TextHeader/>
        <TextTimeline/>
        <TextFooter/>
    </div>
  );
}
