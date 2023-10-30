import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import { useState } from "react";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


const CurrriculumDetail = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) => {
    console.log(values);
  };


  const params = useParams().curriculumId;
  let currriculumData = null;
  //database lookup using id
  console.log(params);

  currriculumData = {
    Code: 'BJP_K16DK17A',
    Name: "Chương trình đào tạo cử nhân ngành Ngôn Ngữ Nhật_Bachelor Program of Japanese Studies",
    DescriptionNo: "1. Mục tiêu đào tạo 1.1 Mục tiêu chung Mục tiêu chuyên môn của Chương trình đào tạo ngành Ngôn ngữ Nhật (dưới đây gọi tắt là Chương trình) là đào tạo cử nhân ngành ngôn ngữ Nhật có phẩm chất chính trị, đạo đức nghề nghiệp, có hiểu biết về văn hóa Nhật ...Bản, nắm vững kiến thức ngôn ngữ Nhật, có khả năng sử dụng tiếng Nhật như một công cụ hiệu quả trong công việc. Với 3 định hướng chuyên ngành là Biên - Phiên dịch, Quản trị khách sạn &amp; du lịch, Công nghệ Thông tin, sinh viên ngành ngôn ngữ Nhật có thể phát triển nghề nghiệp ở các chuyên môn sâu, bắt kịp các xu hướng phát triển của xã hội trong xu thế đa dạng hoá và chuyên sâu nhiều lĩnh vực ngành nghề, đáp ứng tốt các nhu cầu nhân sự của các cơ quan, ban ngành, các tổ chức, doanh nghiệp trong và ngoài nước. Cùng với mục tiêu chuyên môn trên đây, Chương trình luôn chú trọng trang bị cho người học năng lực ngoại ngữ toàn cầu với khóa học Tiếng Anh Chuẩn bị kéo dài từ 0 - 1 năm thích ứng với trình độ từng sinh viên, giúp tạo đầu ra tương đương IELTS 6.0; sau khi tốt nghiệp, người học có thể học tập và làm việc trong các môi trường quốc tế, đa văn hóa tại nhiều quốc gia khác nhau. Chương trình cũng hướng tới việc trang bị cho người học các kỹ năng mềm như giao tiếp, làm việc nhóm, tư duy phản biện, tư duy khởi nghiệp và tinh thần lao động nghiêm túc, cống hiến, sáng tạo, khả năng học tập suốt đời và những hiểu biết cơ bản về chính trị, pháp luật, đạo đức cũng như phương pháp luận khoa học. Chương trình cũng hướng tới việc gìn giữ các giá trị và bản sắc dân tộc Việt Nam bằng việc đưa vào các học phần về Nhạc cụ truyền thống và Vovinam. Những giá trị này sẽ giúp bồi đắp cho sinh viên lòng tự hào dân tộc, và đem lại sự khác biệt, nét đặc trưng cho người học khi làm việc trong các môi trường đa văn hóa sau này. 1.2 Mục tiêu cụ thể Các mục tiêu lớn trên đây được thể hiện rõ rệt hơn ở các mục tiêu cụ thể sau: PO1: Có kiến thức và các kĩ năng thực hành, sử dụng tiếng Nhật đạt chuẩn tương đương với bậc 5 trong Khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam hoặc tương đương với bậc C1 trong Khung JF standard/ CEFR hoặc bậc N2 trong chuẩn thi Năng lực ngoại ngữ JLPT dành cho sinh viên nước ngoài học tiếng Nhật. PO2: Có kiến thức lí luận cơ bản liên quan đến các bình diện Ngữ âm, Ngữ pháp, Từ vựng của ngôn ngữ Nhật nhằm củng cố cho kiến thức thực hành tiếng, phục vụ cho hoạt động dịch thuật, thực hiện các nghiên cứu so sánh đối chiếu hoặc công tác học tập ở các bậc học tiếp theo. PO3: Có cái nhìn tổng quát về Nhật Bản dựa trên việc nắm bắt những kiến thức căn bản và khái quát về đất nước, con người, văn hoá và tác phong làm việc trong doanh nghiệp Nhật Bản, tạo khả năng thích ứng tốt, hòa nhập nhanh trong môi trường làm việc với đối tác Nhật và đa văn hóa trong thời đại toàn cầu hoá. PO4: Có định hướng chuyên môn về nghề nghiệp, nắm được lượng từ vựng cơ bản, các biểu đạt cũng như các kiến thức, kĩ năng cơ bản đáp ứng nhu cầu phát triển của bản thân và xã hội về các ngành nghề hoạt động này. PO5: Có trình độ về tiếng Anh đạt bậc 4 trong KNLNN 6 bậc dùng cho Việt Nam và Khung tiếng Anh chuẩn châu Âu, sử dụng tiếng Anh để giao tiếp tốt trong phạm vi hỗ trợ các nghiệp vụ chuyên môn sau này. PO6: Có kỹ năng làm việc nhóm, kỹ năng thuyết trình, kỹ năng tư duy phản biện, kỹ năng lập kế hoạch và quản lý thời gian. PO7: Có hiểu biết về khởi nghiệp và có tinh thần khởi nghiệp. PO8: Có thể chất tốt, phẩm chất và đạo đức nghề nghiệp phù hợp; ý thức kỷ luật và tác phong công nghiệp phù hợp với thời đại phát triển công nghệ. PO9: Có hiểu biết về lý luận chính trị, đường lối của Đảng, chính sách của nhà nước, an ninh quốc phòng và văn hóa dân tộc trong bối cảnh hội nhập quốc tế. PO10: Có nền tảng vững chắc để tự học tập và phát triển năng lực tự học, tạo tiền đề cho việc học tập, nghiên cứu ở bậc học cao hơn về chuyên ngành Ngôn ngữ Nhật; tích lũy những phẩm chất và kỹ năng cá nhân và nghề nghiệp quan trọng để trở thành các chuyên gia trong lĩnh vực biên - phiên dịch, các nhà quản lý, lãnh đạo trong lĩnh vực khách sạn và du lịch, đặc biệt có kiến thức cơ bản về công nghệ thông tin trong công việc chuyên môn, thích ứng với sự thay đổi nhanh chóng của thời đại khoa học công nghệ. 2. Vị trí làm việc sau khi tốt nghiệp Sinh viên tốt nghiệp ngành Ngôn ngữ Nhật có thể đảm nhận vị trí công việc tại các nhóm ngành nghề sau: - Nhóm 1: Biên dịch viên/Phiên dịch viên/Biên tập viên: Thực hiện vai trò biên -phiên dịch viên Nhật - Việt, Việt - Nhật tại các công ty có liên quan đến công tác này; Đặc biệt, có thể làm biên - phiên dịch kỹ thuật trong các công ty phát triển phần mềm với đối tác Nhật Bản; người tốt nghiệp cũng có thể sử dụng tiếng Nhật để làm việc tại các cơ quan báo chí, nhà xuất bản, đài phát thanh, truyền hình hay tham gia biên tập, hiệu đính các tài liệu, ấn phẩm có liên quan đến tiếng Việt, tiếng Nhật và ngôn ngữ học Nhật - Việt tại Việt Nam và Nhật Bản. - Nhóm 2: Thư ký văn phòng/ Trợ lý đối ngoại/ Trợ lí hành chính/ Trợ lý giảm đốc/ Nhân viên phát triển thị trường...: Sử dụng tiếng Nhật để phụ trách các công việc liên quan đến công tác đối ngoại, hợp tác, kinh doanh, xuất nhập khẩu với các đối tác Nhật Bản, hỗ trợ công tác đàm phán, giao dịch, kí kết hợp đồng kinh doanh... tại các doanh nghiệp, các tổ chức trong và ngoài nước, các lĩnh vực liên quan có sử dụng tiếng Nhật hoặc có quan hệ với Nhật Bản. - Nhóm 3: Nhân viên ngành du lịch, khách sạn/ hoặc kỹ sư cầu nối, biên phiên dịch trong ngành IT: - Sinh viên lựa chọn định hướng Quản trị khách sạn và Du lịch có thể đảm nhận các vị trí công tác trong ngành du lịch như hướng dẫn viên du lịch, nhân viên kinh doanh du lịch, nhân viên điều hành tour, nhân viên chăm sóc khách hàng, biên - phiên dịch... trong các đại lý du lịch, công ty du lịch - lữ hành trong và ngoài nước có đối tác khách hàng Nhật. - Sinh viên lựa chọn định hướng Tiếng Nhật công nghệ thông tin, nếu học thêm các kiến thức chuyên sâu hơn về IT trong quá trình làm việc tại đơn vị, có thể tham gia các dự án, làm kỹ sư cầu nối, kết nối với khách hàng Nhật (ブリッジエンジニア/ comtor), biên - phiên dịch... trong lĩnh vực công nghệ thông tin. - Nhóm 4: Nghiên cứu viên/ Giảng viên/ học sau đại học: Có thể thực hiện nhiệm vụ nghiên cứu tại các trung tâm, đơn vị có nghiên cứu về ngôn ngữ và văn hoá Nhật hoặc Nhật Bản học nói chung ở trong và ngoài nước. Người tốt nghiệp cũng có thể học thêm về nghiệp vụ sư phạm để tham gia công tác giảng dạy tiếng Nhật tại các trung tâm, trường học có giảng dạy về tiếng Nhật, có thể học tiếp các bằng cấp sau đại học về ngôn ngữ, văn học, văn hoá của Nhật Bản tại các cơ sở đào tạo sau đại học trong và ngoài nước. 1. Training Objectives 1.1 General objectives The professional objective of the Training program of Japanese Language (hereinafter referred to as the Training program) is to train Japanese Language graduates with political qualities, professional ethics, having an understanding of Japanese culture, mastering knowledge of Japanese language and being able to use Japanese as an effective tool at work. With 3 orientations namely Translation - Interpreting, Hotel &amp; Tourism Management, and Information Technology, students can develop careers in specialized fields and keep up with the development trends towards diversification and specialization of many fields and occupations of the society, meet demand for human resources related to Japanese language of agencies and departments organizations and enterprises in the domestic and foreign environment. In addition, the Training program always emphasizes on equipping students with foreign language skills through the Preparation English program lasting from 0-1 years depending on the student's level and the output is equivalent to IELTS 6.0. After graduating, students can study and work in international and multicultural environments in different countries. The training program also aims to provide students with soft skills such as communication, teamwork, critical thinking, entrepreneurial mindset, serious work spirit, dedication, creative thinking, the ability of lifelong learning and fundamental understandings of politics, law, ethics, and scientific methodology. These knowledge and skills will be equipped for students through the courses of Political theory, National Defense Education, etc. The program also aims to preserve the values and national identity of Vietnam by involving Traditional musical instruments, Vovinam courses in the training program. These values will help deepen students' national pride, bringing difference for learners when working in multicultural environments. 1.2 Specific objectives The general objectives are shown more clearly in the following specific objectives: PO1: Having knowledge and practical skills, being able to use standard Japanese equivalent to level 5 in the Vietnamese 6-level Foreign Language Competency Framework or equivalent to level C1 in the JF standard/CEFR Framework or level N2 in the standard JLPT Foreign Language Proficiency Test for foreign students studying Japanese. PO2: Having basic theoretical knowledge of Phonetics, Grammar and Vocabulary of the Japanese language to consolidate language knowledge, to serve translation activities, and to carry out comparative research or pursue further study activities. PO3: Having an overview of Japan based on grasping basic and general knowledge about the country, people, culture and working style in Japanese enterprises, being able to adapt and integrate well when working with Japanese partners and in a multicultural environment in the era of globalization. PO4: Having a professional orientation for future career, grasping basic vocabulary, expressions and basic knowledge and skills to meet personal and social development needs in terms of current professions. PO5: Achieving level 4 of English in accordance with the six-level Foreign Language Proficiency Framework for and Common European Framework of Reference for Languages, using English to communicate well to support future professional activities. PO6: Having teamwork skills, presentation skills, critical thinking skills, planning and time management skills. PO7: Understanding entrepreneurship and having an entrepreneurial spirit. PO8: Having good physical condition and proper professional qualities and ethics; having a sense of discipline and working style appropriate with the era of technology development. PO9: Having an understanding of political theory, Party lines, state policies, national security and national culture in the context of international integration. PO10: Having a solid foundation for self-study and self-study capacity development, laying a foundation pursue further study and research in Japanese language major; acquiring important personal and professional qualities and skills to become experts in the field of translators and interpreters, managers and leaders in the hospitality and tourism sectors, having basic knowledge of information technology related to professional fields, be able to adapt to the rapid changes of the science and technology era. 2. Job positions after graduation Graduates of the Japanese Language major can take up positions in the following sectors: - Group 1: Translators/Interpreters/Editors: to become Japanese - Vietnamese or Vietnamese - Japanese translators and interpreters at enterprises; Especially, students can work as technical translator - interpreter in software development companies cooperating with Japanese partners; Graduates can also use the Japanese language and the knowlege of Japanese studies to work at press agencies, publishing houses, media agencies, or participate in editing and revising documents and publications related to Vietnamese and Japanese in Vietnam and Japan. - Group 2: Office secretary/ External affairs assistant/ Administrative assistant/ Assistant manager/ Market development officer, etc.: to use Japanese to take charge of tasks related to foreign affairs, cooperation, doing business, import and export with Japanese partners, supporting negotiations, transactions, signing business contracts, etc. at domestic and foreign enterprises and organizations, in related fields that use Japanese or have relations with Japan. - Group 3: Employees working in tourism, hotel sectors/ bridge engineers, translators and interpreters in IT industry: - Students who have chosen Hospitality and Tourism Management orientation can take up positions in the tourism industry such as tour guide, travel salesperson, tour operator, customer care staff, translator - interpreter in travel agencies, domestic and foreign travel and tourism companies that work with Japanese partners. - Students who have chosen Japanese information technology orientation and learned more specialized knowledge about IT while working at companies can participate in projects, work as bridge engineers (comtor), connect with Japanese customers, or be an interpreter- translator in information technology sector. - Group 4: Researcher/Lecturer/Postgraduate: to be able to carry out research activities in centers that conduct research in the field of Japanese language and culture and Japanese studies in domestic and foreign countries. Graduates can also learn more about pedagogy to teach Japanese at centers and schools, and can follow postgraduate degrees in Japanese languages, literature and culture at domestic and foreign graduate training institutions.",
    TotalCredit: "145"
  }


  const [Name, setName] = useState(currriculumData.Name);

  return (
    <Box m="20px">
      <Header title="currriculum DETAIL" subtitle="FPTUniTrackcurrriculum" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
      // validationSchema={"userSchema"}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              m="40px 0 0 0"
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >


              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={"ID"}
                onBlur={handleBlur}
                // onChange={(e) => setName(e.target.value)} 
                value={params}
                name="Id"
                // error={!!touched.firstName && !!errors.firstName}
                // helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={"Code"}
                onBlur={handleBlur}
                onChange={handleChange}
                value={currriculumData.Code}
                name="Code"
                // error={!!touched.email && !!errors.email}
                // helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={"Name"}
                onBlur={handleBlur}
                onChange={(e) => setName(e.target.value)}
                value={currriculumData.Name}
                name="Name"
                // error={!!touched.lastName && !!errors.lastName}
                // helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                multiline  // Add this line to enable multi-line input
                rows={6}  // Adjust the number of rows as needed
                label={"DescriptionNo"}
                onBlur={handleBlur}
                onChange={handleChange}
                value={currriculumData.DescriptionNo}
                name="DescriptionNo"
                // error={!!touched.contact && !!errors.contact}
                // helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={"Credit"}
                onBlur={handleBlur}
                onChange={""}
                value={currriculumData.TotalCredit}
                name="TotalCredit"
                // error={!!touched.lastName && !!errors.lastName}
                // helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px" gap="10px">
              <Button type="submit" color="secondary" variant="contained">
                Update currriculum
              </Button>
              <Button type="" color="redAccent" variant="contained">
                Delete currriculum
              </Button>

            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default CurrriculumDetail;

// import { useParams } from "react-router-dom";

// const currriculumDetail = () => {
//   const { semesterId } = useParams();

//   // Fetch semester data based on semesterId from your data source
//   // You can use this semester data to display the information on the page

//   return (
//     <div>
//       <h2>semester Details</h2>
//       <p>semester ID: {semesterId}</p>
//       {/* Display other student information here */}
//     </div>
//   );
// }

// export default SemesterDetail;
