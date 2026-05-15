/* helper so every topic gets a consistent subTopic entry */
const sub = (name, isFree = false, lastUpdated = "14th May, 2026", videoLink = "#", textLink = "#") => ({
  name,
  videoLink,
  textLink,
  isFree,
  lastUpdated,
});

const team = [
  {
    id: "0",
    name: "Pankaj Singh",
    role: "Founder & CEO",
    img: require("./Assets/Images/pankaj.jpeg"),
    bio: "Founder of Lumin. Dedicated to making quality legal education accessible to every LLB student at Delhi University.",
  },
  {
    id: "1",
    name: "Ritesh Gupta",
    role: "Frontend Developer",
    img: require("./Assets/Images/placeholder.png"),
  },
  {
    id: "2",
    name: "Chirag Yadav",
    role: "Backend Developer",
    img: require("./Assets/Images/placeholder.png"),
  },
];

const courses = [
  /* ════════════════════════════════
     2nd TERM
  ════════════════════════════════ */
  {
    id: "2",
    term: "2nd",
    courses: [
      /* LB-201 ─ Law of Evidence */
      {
        id: "lb201",
        courseName: "Law of Evidence (LB-201)",
        instructor: "Rupali Gupta",
        price: "299",
        lastUpdated: "14th May 2026",
        language: "English with conversational Hindi",
        accessibleTill: "30th September 2026",
        img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop",
        authorBio:
          "As an Assistant Professor of Law, I bring a strong academic foundation combined with practical experience in mentoring, research, and event organization. I hold a Master’s degree in Law from Himachal Pradesh National Law University (HPNLU), Shimla, and a Bachelor’s degree from Amity University. I successfully cleared the UGC-NET exam in my maiden attempt. Over the course of my career, I have mentored over 100 students preparing for the judiciary, and I actively participate in organizing and speaking at seminars, conferences, and workshops. My contributions to the academic community are reflected in several publications in UGC-Care-approved journals and books, focusing primarily on Family Law and Criminal Law. I am committed to empowering the next generation of legal professionals by not only delivering high-quality education but also by providing guidance in their career and academic growth.",
        contents: [
          {
            topicName: "GENERAL ISSUES RELATING TO LAW OF EVIDENCE",
            subTopics: [sub("GENERAL ISSUES RELATING TO LAW OF EVIDENCE", false, "14th May, 2026","https://drive.google.com/file/d/1ykyc5aZy61iucj8WDI6czcEAxJevJLEQ/view?usp=drive_link")],
            
          },
          {
            topicName: "Relevancy Of Facts",
            subTopics: [sub("Relevant Facts, Difference b/w Facts in Issue and Relevant Facts, Types of Evidence, Facts - Proved,Disproved and Not Proved (Free)", true, "14th May, 2026","https://drive.google.com/file/d/1paEikvaje5nX7bP_mHL9jUepsplYmYhF/view?usp=drive_link")],
          },
          {
            topicName: "Admission and Confession_Dying Declaration",
            subTopics: [sub("Admission and Confession_Dying Declaration", false,"14th May, 2026","https://drive.google.com/file/d/1B2_GTXGclIgpQk-LLE55KIfHxl4EWITE/view?usp=drive_link")],
          },
          {
            topicName: "Opinion of third person when valid",
            subTopics: [sub("Opinion of third person when valid", false, "14th May, 2026","https://drive.google.com/file/d/1Pex20gp1m1Hk2xqmhpFOpFgj0JzPcpZJ/view?usp=drive_link")],
          },
          {
            topicName: "Facts neeed not to be Proved",
            subTopics: [sub("Facts neeed not to be Proved", false, "14th May, 2026","https://drive.google.com/file/d/1uxNp-9IqtgbKDs-ddn-09iCyPHEfCOeg/view?usp=drive_link")],
          },
          {
            topicName: "Oral evidence",
            subTopics: [sub("Oral evidence", false, "14th May, 2026","https://drive.google.com/file/d/11uwKyR81-AHO3PXNFTMWtrzLz_IwxwHb/view?usp=drive_link")],
          },
          {
            topicName: "Estoppel",
            subTopics: [sub("Estoppel", false, "14th May, 2026","https://drive.google.com/file/d/11Z4GCGLvXh_DyNaKz5xz8SBHeiL083kx/view?usp=drive_link")],
          },
          {
            topicName: "Burden of Proof",
            subTopics: [sub("Burden of Proof", false, "14th May, 2026","https://drive.google.com/file/d/1b9I0YKY00kRkQhEm_v3pnc_UZPkojatb/view?usp=drive_link")],
          },
          {
            topicName: "Presumptions",
            subTopics: [sub("Presumptions", false, "14th May, 2026","https://drive.google.com/file/d/14HvXyZQBOcKeza9rB5unYqyIfktmMNF9/view?usp=drive_link")],
          },
          {
            topicName: "Witnesses",
            subTopics: [sub("Witnesses", false, "14th May, 2026","https://drive.google.com/file/d/1YiN7K_Qth5_fqjT0aFJEpL73-_t8Q_ID/view?usp=drive_link")],
          },
          {
            topicName: "Accomplice",
            subTopics: [sub("Accomplice", false, "14th May, 2026","https://drive.google.com/file/d/1dVjr0o1I8RJ89HE3nCfx1aPwp7O_bbJz/view?usp=drive_link")],
          },
        ],
      },

      /* LB-202 ─ Family Law 2 */
      {
        id: "lb202",
        courseName: "Family Law 2 (LB-202)",
        instructor: "Beauty Gupta and Imama",
        price: "299",
        lastUpdated: "14th May 2026",
        language: "English with conversational Hindi",
        accessibleTill: "30th September, 2026",
        img: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=400&h=250&fit=crop",
        authorBio:
          "We provide top quality semester preparation content specially designed for law students. This course covers Hindu personal law, succession, and family law with concise notes and solved PYQs.",
        contents: [
          { topicName: "Joint Hindu Family and Hindu Coparcenary [Free Preview]", subTopics: [sub("Joint Hindu Family and Hindu Coparcenary", true, "14th May, 2026")] },
          { topicName: "Karta – Position, Powers and Liabilities", subTopics: [sub("Karta – Position, Powers and Liabilities", false, "14th May, 2026")] },
          { topicName: "Alienation of Joint Hindu Family Property", subTopics: [sub("Alienation of Joint Hindu Family Property", false, "14th May, 2026")] },
          { topicName: "Partition – Modes, Effects and Reunion", subTopics: [sub("Partition – Modes, Effects and Reunion", false, "14th May, 2026")] },
          { topicName: "General Introduction and Application of Hindu Succession Act, 1956", subTopics: [sub("General Introduction and Application of Hindu Succession Act, 1956", false, "14th May, 2026")] },
          { topicName: "Succession to Property of Male Intestate", subTopics: [sub("Succession to Property of Male Intestate", false, "14th May, 2026")] },
          { topicName: "Succession to Property of Female Intestate", subTopics: [sub("Succession to Property of Female Intestate", false, "14th May, 2026")] },
          { topicName: "Hindu Women's Estate and Stridhan", subTopics: [sub("Hindu Women's Estate and Stridhan", false, "14th May, 2026")] },
          { topicName: "Law Relating to Gifts under Hindu Law", subTopics: [sub("Law Relating to Gifts under Hindu Law", false, "14th May, 2026")] },
          { topicName: "Law Relating to Wills and Testamentary Succession", subTopics: [sub("Law Relating to Wills and Testamentary Succession", false, "14th May, 2026")] },
          { topicName: "Muslim Personal Law – Inheritance and Succession", subTopics: [sub("Muslim Personal Law – Inheritance and Succession", false, "14th May, 2026")] },
        ],
      },

      /* LB-203 ─ Law of Crimes II */
      {
        id: "lb203",
        courseName: "Law of Crimes - II (LB-203)",
        instructor: "Ada Wallace",
        price: "299",
        lastUpdated: "14th May, 2026",
        language: "English with conversational Hindi",
        accessibleTill: "30th September, 2026",
        img: "https://images.unsplash.com/photo-1453945619913-79ec89a82c51?w=400&h=250&fit=crop",
        authorBio:
          "We provide top quality semester preparation content specially designed for law students. This course covers IPC offences with concise notes, case summaries, video lectures, and solved PYQs.",
        contents: [
          { topicName: "Offences Against the State (Chapter VI, IPC) [Free Preview]", subTopics: [sub("Offences Against the State (Chapter VI, IPC)", true, "14th May, 2026")] },
          { topicName: "Offences Against Public Tranquility – Unlawful Assembly, Rioting", subTopics: [sub("Offences Against Public Tranquility – Unlawful Assembly, Rioting", false, "14th May, 2026")] },
          { topicName: "Offences by or Relating to Public Servants", subTopics: [sub("Offences by or Relating to Public Servants", false, "14th May, 2026")] },
          { topicName: "Hurt, Grievous Hurt, Wrongful Restraint and Confinement", subTopics: [sub("Hurt, Grievous Hurt, Wrongful Restraint and Confinement", false, "14th May, 2026")] },
          { topicName: "Assault, Criminal Force, Kidnapping and Abduction", subTopics: [sub("Assault, Criminal Force, Kidnapping and Abduction", false, "14th May, 2026")] },
          { topicName: "Rape and Sexual Offences – Sections 375–376 IPC", subTopics: [sub("Rape and Sexual Offences – Sections 375–376 IPC", false, "14th May, 2026")] },
          { topicName: "Theft, Extortion, Robbery and Dacoity", subTopics: [sub("Theft, Extortion, Robbery and Dacoity", false, "14th May, 2026")] },
          { topicName: "Criminal Misappropriation, Criminal Breach of Trust and Cheating", subTopics: [sub("Criminal Misappropriation, Criminal Breach of Trust and Cheating", false, "14th May, 2026")] },
          { topicName: "Mischief and Criminal Trespass", subTopics: [sub("Mischief and Criminal Trespass", false, "14th May, 2026")] },
          { topicName: "Offences Relating to Documents and Property Marks", subTopics: [sub("Offences Relating to Documents and Property Marks", false, "14th May, 2026")] },
        ],
      },

      /* LB-204 ─ Property Law */
      {
        id: "lb204",
        courseName: "Property Law (LB-204)",
        instructor: "Saumya Sharma",
        price: "299",
        lastUpdated: "14th May, 2026",
        language: "English with conversational Hindi",
        accessibleTill: "30th September, 2026",
        img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=250&fit=crop",
        authorBio:
          "We provide top quality semester preparation content specially designed for law students. This course covers the Transfer of Property Act in detail with exam-focused notes and solved PYQs.",
        contents: [
          { topicName: "General Principles – Transfer of Property Act, 1882 [Free Preview]", subTopics: [sub("General Principles – Transfer of Property Act, 1882", true, "14th May, 2026")] },
          { topicName: "Transfer by Ostensible Owner and Doctrine of Election", subTopics: [sub("Transfer by Ostensible Owner and Doctrine of Election", false, "14th May, 2026")] },
          { topicName: "Conditions Restraining Transfer – Absolute and Partial Restraints", subTopics: [sub("Conditions Restraining Transfer – Absolute and Partial Restraints", false, "14th May, 2026")] },
          { topicName: "Vested and Contingent Interests, Rule Against Perpetuity", subTopics: [sub("Vested and Contingent Interests, Rule Against Perpetuity", false, "14th May, 2026")] },
          { topicName: "Lis Pendens and Fraudulent Transfers", subTopics: [sub("Lis Pendens and Fraudulent Transfers", false, "14th May, 2026")] },
          { topicName: "Part Performance (Section 53A)", subTopics: [sub("Part Performance (Section 53A)", false, "14th May, 2026")] },
          { topicName: "Sale of Immovable Property – Rights and Liabilities", subTopics: [sub("Sale of Immovable Property – Rights and Liabilities", false, "14th May, 2026")] },
          { topicName: "Mortgages – Kinds, Rights of Mortgagor and Mortgagee", subTopics: [sub("Mortgages – Kinds, Rights of Mortgagor and Mortgagee", false, "14th May, 2026")] },
          { topicName: "Leases of Immovable Property – Rights and Liabilities", subTopics: [sub("Leases of Immovable Property – Rights and Liabilities", false, "14th May, 2026")] },
          { topicName: "Exchange and Gift of Immovable Property", subTopics: [sub("Exchange and Gift of Immovable Property", false, "14th May, 2026")] },
        ],
      },

      /* LB-205 ─ Public International Law */
      {
        id: "lb205",
        courseName: "Public International Law (LB-205)",
        instructor: "Radhika Menon",
        price: "299",
        lastUpdated: "14th May 2026",
        language: "English with conversational Hindi",
        accessibleTill: "30th September, 2026",
        img: "https://images.unsplash.com/photo-1526470498-9ae73c665de8?w=400&h=250&fit=crop",
        authorBio:
          "We provide top quality semester preparation content specially designed for law students. This course covers international law with a focus on DU LLB exam patterns and current developments.",
        contents: [
          { topicName: "Nature, Scope and Development of International Law [Free Preview]", subTopics: [sub("Nature, Scope and Development of International Law", true, "14th May, 2026")] },
          { topicName: "Sources of International Law – Treaties, Custom, General Principles", subTopics: [sub("Sources of International Law – Treaties, Custom, General Principles", false, "14th May, 2026")] },
          { topicName: "Relationship between International Law and Municipal Law", subTopics: [sub("Relationship between International Law and Municipal Law", false, "14th May, 2026")] },
          { topicName: "State Recognition – De Facto, De Jure and Consequences", subTopics: [sub("State Recognition – De Facto, De Jure and Consequences", false, "14th May, 2026")] },
          { topicName: "State Succession and Its Effects on Treaties", subTopics: [sub("State Succession and Its Effects on Treaties", false, "14th May, 2026")] },
          { topicName: "Territory – Acquisition and Loss, Law of the Sea", subTopics: [sub("Territory – Acquisition and Loss, Law of the Sea", false, "14th May, 2026")] },
          { topicName: "International Human Rights Law – UDHR, ICCPR, ICESCR", subTopics: [sub("International Human Rights Law – UDHR, ICCPR, ICESCR", false, "14th May, 2026")] },
          { topicName: "United Nations – Structure, Organs and Peacekeeping", subTopics: [sub("United Nations – Structure, Organs and Peacekeeping", false, "14th May, 2026")] },
          { topicName: "Law of Treaties – Vienna Convention on the Law of Treaties, 1969", subTopics: [sub("Law of Treaties – Vienna Convention on the Law of Treaties, 1969", false, "14th May, 2026")] },
          { topicName: "State Responsibility – ILC Articles and Reparations", subTopics: [sub("State Responsibility – ILC Articles and Reparations", false, "14th May, 2026")] },
        ],
      },
    ],
  },

  /* ════════════════════════════════
     4th TERM
  ════════════════════════════════ */
  {
    id: "4",
    term: "4th",
    courses: [
      /* LB-401 ─ Constitutional Law II */
      {
        id: "lb401",
        courseName: "Constitutional Law - II (LB-401)",
        instructor: "Vikram Nair",
        price: "299",
        lastUpdated: "14th May 2026",
        language: "English with conversational Hindi",
        accessibleTill: "30th September, 2026",
        img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop",
        authorBio:
          "We provide top quality semester preparation content specially designed for law students. This course covers Fundamental Rights, DPSPs and constitutional amendments with exam-ready notes and solved PYQs.",
        contents: [
          { topicName: "Right to Equality – Articles 14, 15, 16, 17 and 18 [Free Preview]", subTopics: [sub("Right to Equality – Articles 14, 15, 16, 17 and 18", true, "14th May, 2026")] },
          { topicName: "Right to Freedom – Articles 19-22 and Reasonable Restrictions", subTopics: [sub("Right to Freedom – Articles 19-22 and Reasonable Restrictions", false, "14th May, 2026")] },
          { topicName: "Right Against Exploitation (Articles 23-24)", subTopics: [sub("Right Against Exploitation (Articles 23-24)", false, "14th May, 2026")] },
          { topicName: "Right to Freedom of Religion (Articles 25-28)", subTopics: [sub("Right to Freedom of Religion (Articles 25-28)", false, "14th May, 2026")] },
          { topicName: "Cultural and Educational Rights (Articles 29-30)", subTopics: [sub("Cultural and Educational Rights (Articles 29-30)", false, "14th May, 2026")] },
          { topicName: "Right to Constitutional Remedies (Article 32) and Writs", subTopics: [sub("Right to Constitutional Remedies (Article 32) and Writs", false, "14th May, 2026")] },
          { topicName: "Directive Principles of State Policy – Nature and Justiciability", subTopics: [sub("Directive Principles of State Policy – Nature and Justiciability", false, "14th May, 2026")] },
          { topicName: "Fundamental Duties (Article 51A)", subTopics: [sub("Fundamental Duties (Article 51A)", false, "14th May, 2026")] },
          { topicName: "Amendment of the Constitution – Procedure and Limitations", subTopics: [sub("Amendment of the Constitution – Procedure and Limitations", false, "14th May, 2026")] },
          { topicName: "Emergency Provisions – Articles 352, 356 and 360", subTopics: [sub("Emergency Provisions – Articles 352, 356 and 360", false, "14th May, 2026")] },
          { topicName: "Judicial Review and the Basic Structure Doctrine", subTopics: [sub("Judicial Review and the Basic Structure Doctrine", false, "11th July 2024")] },
        ],
      },

      /* LB-402 ─ Administrative Law */
      {
        id: "lb402",
        courseName: "Administrative Law (LB-402)",
        instructor: "Priya Kapoor",
        price: "299",
        lastUpdated: "14th May 2026",
        language: "English with conversational Hindi",
        accessibleTill: "30th September, 2026",
        img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop",
        authorBio:
          "We provide top quality semester preparation content specially designed for law students. This course covers administrative law doctrines, writs and judicial review with concise notes and solved PYQs.",
        contents: [
          { topicName: "Nature, Scope and Development of Administrative Law [Free Preview]", subTopics: [sub("Nature, Scope and Development of Administrative Law", true, "14th May, 2026")] },
          { topicName: "Separation of Powers – Theory and Its Application in India", subTopics: [sub("Separation of Powers – Theory and Its Application in India", false, "14th May, 2026")] },
          { topicName: "Delegated Legislation – Kinds, Control and Validity", subTopics: [sub("Delegated Legislation – Kinds, Control and Validity", false, "14th May, 2026")] },
          { topicName: "Natural Justice – Audi Alteram Partem", subTopics: [sub("Natural Justice – Audi Alteram Partem", false, "14th May, 2026")] },
          { topicName: "Natural Justice – Nemo Judex in Causa Sua", subTopics: [sub("Natural Justice – Nemo Judex in Causa Sua", false, "14th May, 2026")] },
          { topicName: "Judicial Control of Administrative Action", subTopics: [sub("Judicial Control of Administrative Action", false, "14th May, 2026")] },
          { topicName: "Writs – Certiorari, Mandamus, Prohibition, Quo Warranto, Habeas Corpus", subTopics: [sub("Writs – Certiorari, Mandamus, Prohibition, Quo Warranto, Habeas Corpus", false, "14th May, 2026")] },
          { topicName: "Administrative Tribunals in India", subTopics: [sub("Administrative Tribunals in India", false, "14th May, 2026")] },
          { topicName: "Liability of the State in Tort and Contract", subTopics: [sub("Liability of the State in Tort and Contract", false, "14th May, 2026")] },
          { topicName: "Public Interest Litigation and Lokpal", subTopics: [sub("Public Interest Litigation and Lokpal", false, "14th May, 2026")] },
        ],
      },

      /* LB-403 ─ Labour Law */
      {
        id: "lb403",
        courseName: "Labour Law (LB-403)",
        instructor: "Deepak Malhotra",
        price: "299",
        lastUpdated: "14th May 2026",
        language: "English with conversational Hindi",
        accessibleTill: "30th September, 2026",
        img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=250&fit=crop",
        authorBio:
          "We provide top quality semester preparation content specially designed for law students. This course simplifies industrial legislation for DU LLB students with focused video lectures and notes.",
        contents: [
          { topicName: "Industrial Disputes Act, 1947 – Scope, Application and Definitions [Free Preview]", subTopics: [sub("Industrial Disputes Act, 1947 – Scope, Application and Definitions", true, "14th May, 2026")] },
          { topicName: "Industry, Workman and Industrial Dispute – Key Definitions", subTopics: [sub("Industry, Workman and Industrial Dispute – Key Definitions", false, "14th May, 2026")] },
          { topicName: "Strikes, Lockouts and Lay-offs", subTopics: [sub("Strikes, Lockouts and Lay-offs", false, "14th May, 2026")] },
          { topicName: "Retrenchment, Closure and Transfer of Undertaking", subTopics: [sub("Retrenchment, Closure and Transfer of Undertaking", false, "14th May, 2026")] },
          { topicName: "Trade Unions Act, 1926 – Registration, Rights and Immunities", subTopics: [sub("Trade Unions Act, 1926 – Registration, Rights and Immunities", false, "14th May, 2026")] },
          { topicName: "Contract Labour (Regulation and Abolition) Act, 1970", subTopics: [sub("Contract Labour (Regulation and Abolition) Act, 1970", false, "14th May, 2026")] },
          { topicName: "Minimum Wages Act, 1948 – Fixation and Revision", subTopics: [sub("Minimum Wages Act, 1948 – Fixation and Revision", false, "14th May, 2026")] },
          { topicName: "Payment of Wages Act, 1936 – Provisions and Deductions", subTopics: [sub("Payment of Wages Act, 1936 – Provisions and Deductions", false, "14th May, 2026")] },
          { topicName: "Employees' Provident Fund and Miscellaneous Provisions Act, 1952", subTopics: [sub("Employees' Provident Fund and Miscellaneous Provisions Act, 1952", false, "14th May, 2026")] },
          { topicName: "Maternity Benefit Act, 1961 and Equal Remuneration Act, 1976", subTopics: [sub("Maternity Benefit Act, 1961 and Equal Remuneration Act, 1976", false, "14th May, 2026")] },
        ],
      },

      /* LB-4031 ─ Gender Justice */
      // {
      //   id: "lb4031",
      //   courseName: "Gender Justice & Feminist Jurisprudence (LB-4031)",
      //   instructor: "Neha Srivastava",
      //   price: "299",
      //   lastUpdated: "11th July 2024",
      //   language: "English with conversational Hindi",
      //   accessibleTill: "30th September, 2026",
      //   img: require("./Assets/exam.jpg"),
      //   authorBio:
      //     "We provide top quality semester preparation content specially designed for law students. This course brings feminist legal theory and gender justice law into clear, exam-focused study material.",
      //   contents: [
      //     { topicName: "Feminist Legal Theory – Liberal, Radical and Socialist Feminism [Free Preview]", subTopics: [sub("Feminist Legal Theory – Liberal, Radical and Socialist Feminism", true, "14th May, 2026")] },
      //     { topicName: "Gender Justice – Concept and Constitutional Framework", subTopics: [sub("Gender Justice – Concept and Constitutional Framework", false, "14th May, 2026")] },
      //     { topicName: "Dowry Prohibition Act, 1961 and Section 498A IPC", subTopics: [sub("Dowry Prohibition Act, 1961 and Section 498A IPC", false, "14th May, 2026")] },
      //     { topicName: "Protection of Women from Domestic Violence Act, 2005", subTopics: [sub("Protection of Women from Domestic Violence Act, 2005", false, "14th May, 2026")] },
      //     { topicName: "Sexual Harassment of Women at Workplace (POSH Act), 2013", subTopics: [sub("Sexual Harassment of Women at Workplace (POSH Act), 2013", false, "14th May, 2026")] },
      //     { topicName: "Women in the Criminal Justice System – Victimology", subTopics: [sub("Women in the Criminal Justice System – Victimology", false, "14th May, 2026")] },
      //     { topicName: "Reproductive Rights – MTP Act, 1971 and Bodily Autonomy", subTopics: [sub("Reproductive Rights – MTP Act, 1971 and Bodily Autonomy", false, "14th May, 2026")] },
      //     { topicName: "Personal Laws and Gender Discrimination – Critical Analysis", subTopics: [sub("Personal Laws and Gender Discrimination – Critical Analysis", false, "14th May, 2026")] },
      //     { topicName: "CEDAW – Convention on Elimination of Discrimination Against Women", subTopics: [sub("CEDAW – Convention on Elimination of Discrimination Against Women", false, "14th May, 2026")] },
      //   ],
      // },

      /* LB-4033 ─ Competition Law */
      {
        id: "lb4033",
        courseName: "Competition Law | 2023 (LB-4033)",
        instructor: "Arjun Bhatia",
        price: "299",
        lastUpdated: "14th May, 2026",
        language: "English with conversational Hindi",
        accessibleTill: "30th September, 2026",
        img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=250&fit=crop",
        authorBio:
          "We provide top quality semester preparation content specially designed for law students. This course covers Competition Act 2002 including the 2023 amendments with case-based study material.",
        contents: [
          { topicName: "Overview of Competition Law – MRTP to CCI [Free Preview]", subTopics: [sub("Overview of Competition Law – MRTP to CCI", true, "14th May, 2026")] },
          { topicName: "Competition Act, 2002 – Objectives, Applicability and Definitions", subTopics: [sub("Competition Act, 2002 – Objectives, Applicability and Definitions", false, "14th May, 2026")] },
          { topicName: "Anti-Competitive Agreements – Section 3 (Horizontal and Vertical)", subTopics: [sub("Anti-Competitive Agreements – Section 3 (Horizontal and Vertical)", false, "14th May, 2026")] },
          { topicName: "Abuse of Dominant Position – Section 4", subTopics: [sub("Abuse of Dominant Position – Section 4", false, "14th May, 2026")] },
          { topicName: "Combinations – Mergers and Acquisitions (Sections 5 & 6)", subTopics: [sub("Combinations – Mergers and Acquisitions (Sections 5 & 6)", false, "14th May, 2026")] },
          { topicName: "Competition Commission of India – Powers and Procedure", subTopics: [sub("Competition Commission of India – Powers and Procedure", false, "14th May, 2026")] },
          { topicName: "Penalties, Leniency Programme and Enforcement", subTopics: [sub("Penalties, Leniency Programme and Enforcement", false, "14th May, 2026")] },
          { topicName: "Competition Law and Intellectual Property Rights Interface", subTopics: [sub("Competition Law and Intellectual Property Rights Interface", false, "14th May, 2026")] },
          { topicName: "Competition (Amendment) Act, 2023 – Key Changes", subTopics: [sub("Competition (Amendment) Act, 2023 – Key Changes", false, "14th May, 2026")] },
        ],
      },

      /* LB-4036 ─ IPR Law I */
      {
        id: "lb4036",
        courseName: "Intellectual Property Rights Law - I (LB-4036)",
        instructor: "Tanya Walia",
        price: "299",
        lastUpdated: "14th May, 2026",
        language: "English with conversational Hindi",
        accessibleTill: "30th September, 2026",
        img: "https://images.unsplash.com/photo-1485217988980-11786ced9454?w=400&h=250&fit=crop",
        authorBio:
          "We provide top quality semester preparation content specially designed for law students. This course covers Copyright and Trademark law with detailed notes, case summaries and solved PYQs.",
        contents: [
          { topicName: "Overview of Intellectual Property Rights – TRIPS Agreement [Free Preview]", subTopics: [sub("Overview of Intellectual Property Rights – TRIPS Agreement", true, "14th May, 2026")] },
          { topicName: "Copyright Law – Berne Convention and Copyright Act, 1957", subTopics: [sub("Copyright Law – Berne Convention and Copyright Act, 1957", false, "14th May, 2026")] },
          { topicName: "Original Works, Authorship and Ownership of Copyright", subTopics: [sub("Original Works, Authorship and Ownership of Copyright", false, "14th May, 2026")] },
          { topicName: "Economic Rights and Moral Rights of Authors", subTopics: [sub("Economic Rights and Moral Rights of Authors", false, "14th May, 2026")] },
          { topicName: "Copyright Infringement, Fair Dealing and Remedies", subTopics: [sub("Copyright Infringement, Fair Dealing and Remedies", false, "14th May, 2026")] },
          { topicName: "Trade Marks Act, 1999 – Definition, Kinds and Functions", subTopics: [sub("Trade Marks Act, 1999 – Definition, Kinds and Functions", false, "14th May, 2026")] },
          { topicName: "Registration and Protection of Trademarks", subTopics: [sub("Registration and Protection of Trademarks", false, "14th May, 2026")] },
          { topicName: "Passing Off, Infringement and Remedies under Trade Marks Act", subTopics: [sub("Passing Off, Infringement and Remedies under Trade Marks Act", false, "14th May, 2026")] },
          { topicName: "Geographical Indications and Plant Variety Protection", subTopics: [sub("Geographical Indications and Plant Variety Protection", false, "14th May, 2026")] },
        ],
      },
    ],
  },

  /* ════════════════════════════════
     6th TERM
  ════════════════════════════════ */
  {
    id: "6",
    term: "6th",
    courses: [
      /* LB-601 ─ Advocacy */
      {
        id: "lb601",
        courseName: "Advocacy Professional Ethics and Accountancy of Lawyers (LB-601)",
        instructor: "Garima Garg",
        price: "199",
        lastUpdated: "14th May, 2026",
        language: "English with conversational Hindi",
        accessibleTill: "30th September 2026",
        img: "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?w=400&h=250&fit=crop",
        authorBio:
          "Hello, future legal legends! I'm Garima, your enthusiastic guide through the wild world of law, where the gavel meets the giggles. With a passion for justice and a knack for making the mundane magnificent, I promise to make our legal journey as entertaining as it is educational. Let's kick things off with my background. I earned my LLB Honors from GGSIPU. I then polished my legal prowess with an LLM in Constitutional Law where I scored an impressive 80%, because why not aim for an A+ in awesomeness? My research and conference presentations have been so riveting, they’ve even won best paper awards. Who knew the law could be so award-winningly fun?",
        contents: [
          {
            topicName: "Introduction to Professional Ethics and Advocacy [Free Preview]",
            subTopics: [
              sub(
                "Course introduction and roadmap",
                true,
                "14th May, 2026",
                "https://drive.google.com/file/d/111YI1LES5NAbxhr7v9wSDk3E-t7ydxxo/view?usp=drivesdk",
                "https://drive.google.com/file/d/1xmI9776NoPpA7cXVbdVTuJD5G9IBXN3n/view?usp=drive_link"
              ),
            ],
          },
          {
            topicName: "The Advocates Act, 1961",
            subTopics: [
              sub(
                "Introduction",
                false,
                "14th May, 2026",
                "https://drive.google.com/file/d/111YI1LES5NAbxhr7v9wSDk3E-t7ydxxo/view",
                "https://drive.google.com/file/d/1xmI9776NoPpA7cXVbdVTuJD5G9IBXN3n/view?usp=drive_link"
              ),
              sub(
                "Bar Councils",
                false,
                "14th May, 2026",
                "https://drive.google.com/file/d/10VGhoJ9OOQx9Yj3cVDUac5-9i4DDi1do/view?usp=drive_link",
                "https://drive.google.com/file/d/1DtN-SLSafDUJIBL6rCYdAKattVFrHLSj/view?usp=drive_link"
              ),
            ],
          },
          {
            topicName: "Admissions and Enrollment of Advocates",
            subTopics: [
              sub(
                "Admissions and Enrollment of Advocates",
                false,
                "14th May, 2026",
                "https://drive.google.com/file/d/10Ug7VnhdgVKJuMGVdFklf23xatSntKHn/view?usp=drive_link",
                "https://drive.google.com/file/d/1UTiYGmvnTgeZvMzqqNcFd3p3En_7gHpv/view?usp=drive_link"
              ),
              sub(
                "Eligibility, Procedure and Enrollment Certificate",
                false,
                "14th May, 2026",
                "https://drive.google.com/file/d/111eAUzp-GqN231Ydbr6OSROr3YnL-tlI/view?usp=drive_link",
                "https://drive.google.com/file/d/1UTiYGmvnTgeZvMzqqNcFd3p3En_7gHpv/view?usp=drive_link"
              ),
            ],
          },
          {
            topicName: "Right to Practice",
            subTopics: [
              sub(
                "Right to Practice",
                false,
                "14th May, 2026",
                "https://drive.google.com/file/d/15Mbxzyj5SMukUeNofsA_2H1q6FSEinPA/view?usp=drive_link",
                "https://drive.google.com/file/d/1YTVjjsumW-lZ1wRt8URjLaBl-Q7XStfT/view?usp=drive_link"
              ),
            ],
          },
          {
            topicName: "Conduct of Advocates and Disciplinary Proceedings",
            subTopics: [
              sub(
                "Standards of Professional Conduct and Etiquette",
                false,
                "14th May, 2026",
                "https://drive.google.com/file/d/13SnP_ef49PqwErywO-ycfjwQjCIOR5fT/view?usp=drive_link",
                "https://drive.google.com/file/d/1ByNN2o8Tvh3JQxSStNfVWu37gpWgNsbO/view?usp=drive_link"
              ),
              sub(
                "Professional Misconduct and Disciplinary Proceedings",
                false,
                "14th May, 2026",
                "https://drive.google.com/file/d/11hm6i4txvj15Jmqfn4Vel17x3-6Q8_D0/view?usp=drive_link",
                "https://drive.google.com/file/d/11VI_r9Eh3ITZdNYNMbazPitUpN4eyJQu/view?usp=drive_link"
              ),
            ],
          },
          {
            topicName: "Contempt of Court",
            subTopics: [
              sub(
                "Contempt of Courts Act, 1971",
                false,
                "14th May, 2026",
                "https://drive.google.com/file/d/13Psa9m9eUuid6ru0Bk1K_nJ10BNA1qmT/view?usp=drive_link",
                "https://drive.google.com/file/d/1hRpZ_nJZSqf-tUysO3Tmav0yP90JUG1d/view?usp=drive_link"
              ),
              sub(
                "Case law and statutory interpretation",
                false,
                "14th May, 2026",
                "https://drive.google.com/file/d/13msObZ0zh4dBW9HNFf4dZletF5vDvX-j/view?usp=drive_link",
                "https://drive.google.com/file/d/1fin4aCstUuGhXytdhrBmpENZ7an5uE0m/view?usp=drive_link"
              ),
            ],
          },
          {
            topicName: "Defences Available in Contempt of Court",
            subTopics: [
              sub(
                "Defences Available in Contempt of Court",
                false,
                "14th May, 2026",
                "https://drive.google.com/file/d/14cgpeK_zteOfZCiY_OahRWCfgK8BdKXS/view?usp=drive_link",
                "https://drive.google.com/file/d/1RSm8g8MctZsFPNZwy1L3o5qomMm4uaGc/view?usp=drive_link"
              ),
              sub(
                "Practical analysis and problem-solving approach",
                false,
                "14th May, 2026",
                "https://drive.google.com/file/d/15rrht-OBSUbr8zrySyptNpL4ltfvvObo/view?usp=drive_link",
                "https://drive.google.com/file/d/1RSm8g8MctZsFPNZwy1L3o5qomMm4uaGc/view?usp=drive_link"
              ),
            ],
          },
          {
            topicName: "Contempt by Judges and Magistrates [Free Preview]",
            subTopics: [
              sub(
                "Contempt by Judges & Magistrates",
                true,
                "14th May, 2026",
                "https://drive.google.com/file/d/153G-Aph0gAy_bdpiVxNQQsNQ5ePkno9V/view?usp=drive_link",
                "https://drive.google.com/file/d/1FMmCo9JnWBpMnYo1kggKWF_idmGLldw1/view?usp=drive_link"
              ),
            ],
          },
          {
            topicName: "Punishment and Procedure in Contempt Matters",
            subTopics: [
              sub(
                "Punishment for Contempt",
                false,
                "14th May, 2026",
                "https://drive.google.com/file/d/159wiNR42tRvIfq2tCCfm2EMIfWRZixbO/view?usp=drive_link",
                "https://drive.google.com/file/d/1Ww5IsuwBvEdNO1lumTaLN6Dyi4_SZdy1/view?usp=drive_link"
              ),
              sub(
                "Procedure of Contempt",
                false,
                "14th May, 2026",
                "https://drive.google.com/file/d/157pKC9NAAvHIicIR-8uDb-5xMWkJZiTO/view?usp=drive_link",
                "https://drive.google.com/file/d/1-iNEXg7Sfeks___9lZL7eZKXeyUccYTI/view?usp=drive_link"
              ),
            ],
          },
          {
            topicName: "Rules Governing Advocates",
            subTopics: [
              sub(
                "Part 1",
                false,
                "14th May, 2026",
                "https://drive.google.com/file/d/13VlCXQ5rpDJNIDOiEP0DA-RhDm_li_nQ/view?usp=drive_link",
                "https://drive.google.com/file/d/1ULoKLJuBLbm6UcKSSvl3vBo--etr-YzR/view?usp=drive_link"
              ),
              sub(
                "Part 2",
                false,
                "14th May, 2026",
                "https://drive.google.com/file/d/15ZR45fXTUQSO8DcTgmUIdppNICH-76hK/view?usp=drive_link",
                "https://drive.google.com/file/d/1ULoKLJuBLbm6UcKSSvl3vBo--etr-YzR/view?usp=drive_link"
              ),
              sub(
                "Part 3",
                false,
                "14th May, 2026",
                "https://drive.google.com/file/d/13URNM90RTN2ZZhi-7pTuau51oSaiOqz4/view?usp=drive_link",
                "https://drive.google.com/file/d/1UvsXnPvZYXccv8GRwdAbFp1Fppgjaw8C/view?usp=drive_link"
              ),
            ],
          },
          {
            topicName: "Summary of Case Laws",
            subTopics: [
              sub(
                "Case Summary Lecture 1",
                false,
                "14th May, 2026",
                "https://drive.google.com/file/d/11tciczaQR2BCzYttQlfZ86WQmFxkatAY/view?usp=drive_link",
                "https://drive.google.com/file/d/1-nHUeSJWU4M2UKpX4qnwd5aUmvcpf9is/view?usp=drive_link"
              ),
              sub(
                "Case Summary Lecture 2",
                false,
                "14th May, 2026",
                "https://drive.google.com/file/d/116XS83CrENyp4ZHkwGnokUdzv-2EvKGc/view?usp=drive_link",
                "https://drive.google.com/file/d/1ctMxGyu8xAYblbMDOlmCT_dmeUG8oERw/view?usp=drive_link"
              ),
              sub(
                "Case Summary Lecture 3",
                false,
                "14th May, 2026",
                "https://drive.google.com/file/d/11Cmn3eYGmDNwjOVbWQW7UTzFmcP8-tMP/view?usp=drive_link",
                "#"
              ),
            ],
          },
          {
            topicName: "Revision of Important Topics I",
            subTopics: [
              sub(
                "Contempt of Court versus Freedom of Speech",
                false,
                "14th May, 2026",
                "https://drive.google.com/file/d/1Bj028hjpvIgD74iREmtQmyhA2yctw09d/view?usp=drive_link",
                "https://drive.google.com/file/d/1skENF69JHMNqtzGmXTbs71MVQ0q96pDl/view?usp=drive_link"
              ),
              sub(
                "Power to Suspend Advocates during Misconduct",
                false,
                "14th May, 2026",
                "https://drive.google.com/file/d/14F67c8LCgCiXlgTSXzaA3Y8CKRTe4mwP/view?usp=drive_link",
                "https://drive.google.com/file/d/1T-ER0kEXQawcLeWxZC9_H1YoHcx-dG7w/view?usp=drive_link"
              ),
            ],
          },
          {
            topicName: "Revision of Important Topics II",
            subTopics: [
              sub(
                "Defences to Contempt of Court",
                false,
                "14th May, 2026",
                "https://drive.google.com/file/d/1pYWk_dYh9hYm4JwXPaHdTCPARWZP2erb/view?usp=drive_link",
                "https://drive.google.com/file/d/1d65R48_IzlUZd07tqKzhFuPD_S1ssa1O/view?usp=drive_link"
              ),
              sub(
                "Advocates Duty towards Client: Legal and Ethical Framework",
                false,
                "14th May, 2026",
                "https://drive.google.com/file/d/1MPmAne8k576tCl3pYE_iUrN33erHFWl_/view?usp=drive_link",
                "https://drive.google.com/file/d/1FytP-Xbjm88vogoSBdOPSOMHo4_mjio8/view?usp=drive_link"
              ),
            ],
          },
          {
            topicName: "Revision of Important Topics III",
            subTopics: [
              sub(
                "Professional Misconduct Under Advocates Act",
                false,
                "14th May, 2026",
                "https://drive.google.com/file/d/11hm6i4txvj15Jmqfn4Vel17x3-6Q8_D0/view?usp=drive_link",
                "https://drive.google.com/file/d/11VI_r9Eh3ITZdNYNMbazPitUpN4eyJQu/view?usp=drive_link"
              ),
            ],
          },
          {
            topicName: "Complete Framework for Professional Ethics Exam",
            subTopics: [
              sub(
                "Lecture notes",
                false,
                "14th May, 2026",
                "#",
                "https://drive.google.com/file/d/1E4tItKGcwSlSotdXtzX4MSQzHEFW-QZI/view?usp=drive_link"
              ),
            ],
          },
          {
            topicName: "Solved Question Paper",
            subTopics: [
              sub(
                "2024 Question Paper Solved",
                false,
                "14th May, 2026",
                "https://drive.google.com/file/d/1jm8BrN7swJvlj0Rnzedh86T6Hj9eXFWV/view?usp=drive_link",
                "https://drive.google.com/file/d/1GZpiZLQj0lWb-O9yi8pK6azxuOK4ajtC/view?usp=drive_link"
              ),
            ],
          },
        ],
      },

      /* LB-602 ─ ADR */
      {
        id: "lb602",
        courseName: "Alternative Dispute Resolution (LB-602)",
        instructor: "Kartik sharma",
        price: "299",
        lastUpdated: "14th May, 2026",
        language: "English with conversational Hindi",
        accessibleTill: "30th September, 2026",
        img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=250&fit=crop",
        authorBio:
          "We provide top quality semester preparation content specially designed for law students. This course covers arbitration, mediation and Lok Adalat with practical insights and solved PYQs.",
        contents: [
          { topicName: "Introduction to ADR – Concept, Need and Historical Development [Free Preview]", subTopics: [sub("Introduction to ADR – Concept, Need and Historical Development", true, "14th May, 2026")] },
          { topicName: "Arbitration and Conciliation Act, 1996 – Overview and Scope", subTopics: [sub("Arbitration and Conciliation Act, 1996 – Overview and Scope", false, "14th May, 2026")] },
          { topicName: "Arbitration Agreement – Definition, Kinds and Validity", subTopics: [sub("Arbitration Agreement – Definition, Kinds and Validity", false, "14th May, 2026")] },
          { topicName: "Appointment, Jurisdiction and Challenge of Arbitrators", subTopics: [sub("Appointment, Jurisdiction and Challenge of Arbitrators", false, "14th May, 2026")] },
          { topicName: "Conduct of Arbitral Proceedings and Arbitral Award", subTopics: [sub("Conduct of Arbitral Proceedings and Arbitral Award", false, "14th May, 2026")] },
          { topicName: "Enforcement and Setting Aside of Domestic Arbitral Awards", subTopics: [sub("Enforcement and Setting Aside of Domestic Arbitral Awards", false, "14th May, 2026")] },
          { topicName: "International Commercial Arbitration and Foreign Awards", subTopics: [sub("International Commercial Arbitration and Foreign Awards", false, "14th May, 2026")] },
          { topicName: "Conciliation and Mediation Act, 2023", subTopics: [sub("Conciliation and Mediation Act, 2023", false, "14th May, 2026")] },
          { topicName: "Lok Adalat System – Legal Services Authorities Act, 1987", subTopics: [sub("Lok Adalat System – Legal Services Authorities Act, 1987", false, "14th May, 2026")] },
          { topicName: "Online Dispute Resolution (ODR) – Technology and Future", subTopics: [sub("Online Dispute Resolution (ODR) – Technology and Future", false, "14th May, 2026")] },
        ],
      },

      /* LB-603 ─ Environmental Law */
      {
        id: "lb603",
        courseName: "Environmental Law (LB-603)",
        instructor: "Kavita Joshi",
        price: "299",
        lastUpdated: "14th May, 2026",
        language: "English with conversational Hindi",
        accessibleTill: "30th September, 2026",
        img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop",
        authorBio:
          "We provide top quality semester preparation content specially designed for law students. This course covers Indian and international environmental law with PIL case studies and solved PYQs.",
        contents: [
          { topicName: "Development of Environmental Law in India [Free Preview]", subTopics: [sub("Development of Environmental Law in India", true, "14th May, 2026")] },
          { topicName: "Constitutional Provisions – Articles 48A, 51A(g) and Article 21", subTopics: [sub("Constitutional Provisions – Articles 48A, 51A(g) and Article 21", false, "14th May, 2026")] },
          { topicName: "Environment Protection Act, 1986", subTopics: [sub("Environment Protection Act, 1986", false, "14th May, 2026")] },
          { topicName: "Water (Prevention and Control of Pollution) Act, 1974", subTopics: [sub("Water (Prevention and Control of Pollution) Act, 1974", false, "14th May, 2026")] },
          { topicName: "Air (Prevention and Control of Pollution) Act, 1981", subTopics: [sub("Air (Prevention and Control of Pollution) Act, 1981", false, "14th May, 2026")] },
          { topicName: "Forest Conservation Act, 1980 and Forest Rights Act, 2006", subTopics: [sub("Forest Conservation Act, 1980 and Forest Rights Act, 2006", false, "14th May, 2026")] },
          { topicName: "Wildlife Protection Act, 1972 and Biodiversity Act, 2002", subTopics: [sub("Wildlife Protection Act, 1972 and Biodiversity Act, 2002", false, "14th May, 2026")] },
          { topicName: "International Environmental Law – Stockholm, Rio Declaration, Agenda 21", subTopics: [sub("International Environmental Law – Stockholm, Rio Declaration, Agenda 21", false, "14th May, 2026")] },
          { topicName: "Climate Change, Kyoto Protocol and Paris Agreement", subTopics: [sub("Climate Change, Kyoto Protocol and Paris Agreement", false, "14th May, 2026")] },
          { topicName: "National Green Tribunal Act, 2010 and PIL in Environment", subTopics: [sub("National Green Tribunal Act, 2010 and PIL in Environment", false, "14th May, 2026")] },
        ],
      },

      /* LB-604 ─ Taxation */
      {
        id: "lb604",
        courseName: "Principles of Taxation Law (LB-604)",
        instructor: "Rohit Verma",
        price: "299",
        lastUpdated: "14th May, 2026",
        language: "English with conversational Hindi",
        accessibleTill: "30th September, 2026",
        img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
        authorBio:
          "We provide top quality semester preparation content specially designed for law students. This course makes taxation law accessible with no prior accounting knowledge required and solved PYQs.",
        contents: [
          { topicName: "Constitutional Framework of Taxation in India [Free Preview]", subTopics: [sub("Constitutional Framework of Taxation in India", true, "14th May, 2026")] },
          { topicName: "Income Tax Act, 1961 – Basic Concepts, Person, Assessee, Income", subTopics: [sub("Income Tax Act, 1961 – Basic Concepts, Person, Assessee, Income", false, "14th May, 2026")] },
          { topicName: "Residential Status and Scope of Total Income", subTopics: [sub("Residential Status and Scope of Total Income", false, "14th May, 2026")] },
          { topicName: "Heads of Income – Salary and Income from House Property", subTopics: [sub("Heads of Income – Salary and Income from House Property", false, "14th May, 2026")] },
          { topicName: "Profits and Gains from Business or Profession", subTopics: [sub("Profits and Gains from Business or Profession", false, "14th May, 2026")] },
          { topicName: "Capital Gains – Short Term and Long Term", subTopics: [sub("Capital Gains – Short Term and Long Term", false, "14th May, 2026")] },
          { topicName: "Income from Other Sources and Clubbing of Income", subTopics: [sub("Income from Other Sources and Clubbing of Income", false, "14th May, 2026")] },
          { topicName: "Deductions under Chapter VI-A and Tax Exemptions", subTopics: [sub("Deductions under Chapter VI-A and Tax Exemptions", false, "14th May, 2026")] },
          { topicName: "Goods and Services Tax (GST) – Overview, CGST, SGST, IGST", subTopics: [sub("Goods and Services Tax (GST) – Overview, CGST, SGST, IGST", false, "14th May, 2026")] },
          { topicName: "Customs Law – Basic Principles and Valuation", subTopics: [sub("Customs Law – Basic Principles and Valuation", false, "14th May, 2026")] },
        ],
      },

      /* LB-6032 ─ Insurance and Banking */
      {
        id: "lb6032",
        courseName: "Insurance and Banking Law (LB-6032)",
        instructor: "Meera Chandrasekaran",
        price: "299",
        lastUpdated: "14th May, 2026",
        language: "English with conversational Hindi",
        accessibleTill: "30th September, 2026",
        img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=400&h=250&fit=crop",
        authorBio:
          "We provide top quality semester preparation content specially designed for law students. This course covers insurance and banking regulation with practical examples and exam-focused notes.",
        contents: [
          { topicName: "Insurance – General Principles, Nature and Kinds [Free Preview]", subTopics: [sub("Insurance – General Principles, Nature and Kinds", true, "14th May, 2026")] },
          { topicName: "IRDAI – Insurance Regulatory and Development Authority", subTopics: [sub("IRDAI – Insurance Regulatory and Development Authority", false, "14th May, 2026")] },
          { topicName: "Life Insurance – Contract, Nomination, Assignment and Claim", subTopics: [sub("Life Insurance – Contract, Nomination, Assignment and Claim", false, "14th May, 2026")] },
          { topicName: "General Insurance – Marine, Fire and Motor Insurance", subTopics: [sub("General Insurance – Marine, Fire and Motor Insurance", false, "14th May, 2026")] },
          { topicName: "Structure of Indian Banking System and Reserve Bank of India", subTopics: [sub("Structure of Indian Banking System and Reserve Bank of India", false, "14th May, 2026")] },
          { topicName: "Banking Regulation Act, 1949 – Licensing and Supervision", subTopics: [sub("Banking Regulation Act, 1949 – Licensing and Supervision", false, "14th May, 2026")] },
          { topicName: "Banker-Customer Relationship – Rights and Duties", subTopics: [sub("Banker-Customer Relationship – Rights and Duties", false, "14th May, 2026")] },
          { topicName: "Negotiable Instruments Act, 1881 – Bills, Cheques and Promissory Notes", subTopics: [sub("Negotiable Instruments Act, 1881 – Bills, Cheques and Promissory Notes", false, "14th May, 2026")] },
          { topicName: "SARFAESI Act, 2002 and Insolvency and Bankruptcy Code, 2016", subTopics: [sub("SARFAESI Act, 2002 and Insolvency and Bankruptcy Code, 2016", false, "14th May, 2026")] },
        ],
      },
      
    ],
  },
];

export { team, courses };
