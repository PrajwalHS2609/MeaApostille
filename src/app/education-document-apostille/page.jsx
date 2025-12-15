import EduDocServiceComp1 from "../../components/EducationDocumentService/EduDocServiceComp1";
import EduDocServiceComp2 from "../../components/EducationDocumentService/EduDocServiceComp2";
import EduDocServiceComp3 from "../../components/EducationDocumentService/EduDocServiceComp3";
import EduDocServiceComp4 from "../../components/EducationDocumentService/EduDocServiceComp4";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";

export default function EductionDocument() {
  return (
   <div>
     <HeaderComponent
      title="Education Document Apostille"
      img="https://techtoday.lenovo.com/sites/default/files/styles/original/public/2023-10/Img-to-replace%402x.jpg.webp?itok=tXeURuIj"
      para="Reduce the repetitive work that chips away your IT resources by shipping fully configured devices that are ready to use, with ProvisionNow."
    />
    <EduDocServiceComp1/>
    <EduDocServiceComp2/>
    <EduDocServiceComp3/>
    <EduDocServiceComp4/>
   </div>
  );
}
