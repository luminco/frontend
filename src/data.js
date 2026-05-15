/* helper so every topic gets a consistent subTopic entry */
const sub = (name, isFree = false, lastUpdated = "3rd July 2024", videoLink = "#", textLink = "#") => ({
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
        instructor: "Aakanksha Derashree",
        price: "299",
        lastUpdated: "6th July 2024",
        language: "English with conversational Hindi",
        accessibleTill: "31st August, 2024",
        img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop",
        authorBio:
          "We provide top quality semester preparation content specially designed for law students. This course contains concise notes, case summaries, video lectures, and solved PYQs.",
        contents: [
          {
            topicName: "GENERAL ISSUES RELATING TO LAW OF EVIDENCE",
            subTopics: [sub("GENERAL ISSUES RELATING TO LAW OF EVIDENCE", false, "3rd July 2024")],
          },
          {
            topicName: "Relevant Facts, Difference b/w Facts in Issue and Relevant Facts, Types of Evidence, Facts - Proved,Disproved and Not Proved [Free Preview]",
            subTopics: [sub("Relevant Facts, Difference b/w Facts in Issue and Relevant Facts, Types of Evidence, Facts - Proved,Disproved and Not Proved (Free)", true, "3rd July 2024")],
          },
          {
            topicName: "Doctrine of relevancy, Difference b/w Admissibility and Relevance, Res gestate",
            subTopics: [sub("Doctrine of relevancy, Difference b/w Admissibility and Relevance, Res gestate", false, "3rd July 2024")],
          },
          {
            topicName: "Section 7 and 8",
            subTopics: [sub("Section 7 and 8", false, "3rd July 2024")],
          },
          {
            topicName: "Admissions – Defined, Kinds, Proof and Exceptions",
            subTopics: [sub("Admissions – Defined, Kinds, Proof and Exceptions", false, "4th July 2024")],
          },
          {
            topicName: "Confessions – Defined, Kinds, Relevancy and Proof",
            subTopics: [sub("Confessions – Defined, Kinds, Relevancy and Proof", false, "4th July 2024")],
          },
          {
            topicName: "Dying Declarations and Statements by Persons who cannot be Called as Witnesses",
            subTopics: [sub("Dying Declarations and Statements by Persons who cannot be Called as Witnesses", false, "5th July 2024")],
          },
          {
            topicName: "Expert Opinion and Opinion as to Handwriting",
            subTopics: [sub("Expert Opinion and Opinion as to Handwriting", false, "5th July 2024")],
          },
          {
            topicName: "Oral and Documentary Evidence – Primary and Secondary Evidence",
            subTopics: [sub("Oral and Documentary Evidence – Primary and Secondary Evidence", false, "6th July 2024")],
          },
          {
            topicName: "Examination of Witnesses – Examination-in-Chief, Cross, Re-Examination",
            subTopics: [sub("Examination of Witnesses – Examination-in-Chief, Cross, Re-Examination", false, "6th July 2024")],
          },
          {
            topicName: "Burden of Proof, Estoppel and Improper Admission of Evidence",
            subTopics: [sub("Burden of Proof, Estoppel and Improper Admission of Evidence", false, "6th July 2024")],
          },
        ],
      },

      /* LB-202 ─ Family Law 2 */
      {
        id: "lb202",
        courseName: "Family Law 2 (LB-202)",
        instructor: "Beauty Gupta and Imama",
        price: "299",
        lastUpdated: "10th July 2024",
        language: "English with conversational Hindi",
        accessibleTill: "31st August, 2024",
        img: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=400&h=250&fit=crop",
        authorBio:
          "We provide top quality semester preparation content specially designed for law students. This course covers Hindu personal law, succession, and family law with concise notes and solved PYQs.",
        contents: [
          { topicName: "Joint Hindu Family and Hindu Coparcenary [Free Preview]", subTopics: [sub("Joint Hindu Family and Hindu Coparcenary", true, "1st July 2024")] },
          { topicName: "Karta – Position, Powers and Liabilities", subTopics: [sub("Karta – Position, Powers and Liabilities", false, "1st July 2024")] },
          { topicName: "Alienation of Joint Hindu Family Property", subTopics: [sub("Alienation of Joint Hindu Family Property", false, "2nd July 2024")] },
          { topicName: "Partition – Modes, Effects and Reunion", subTopics: [sub("Partition – Modes, Effects and Reunion", false, "2nd July 2024")] },
          { topicName: "General Introduction and Application of Hindu Succession Act, 1956", subTopics: [sub("General Introduction and Application of Hindu Succession Act, 1956", false, "3rd July 2024")] },
          { topicName: "Succession to Property of Male Intestate", subTopics: [sub("Succession to Property of Male Intestate", false, "4th July 2024")] },
          { topicName: "Succession to Property of Female Intestate", subTopics: [sub("Succession to Property of Female Intestate", false, "5th July 2024")] },
          { topicName: "Hindu Women's Estate and Stridhan", subTopics: [sub("Hindu Women's Estate and Stridhan", false, "6th July 2024")] },
          { topicName: "Law Relating to Gifts under Hindu Law", subTopics: [sub("Law Relating to Gifts under Hindu Law", false, "7th July 2024")] },
          { topicName: "Law Relating to Wills and Testamentary Succession", subTopics: [sub("Law Relating to Wills and Testamentary Succession", false, "8th July 2024")] },
          { topicName: "Muslim Personal Law – Inheritance and Succession", subTopics: [sub("Muslim Personal Law – Inheritance and Succession", false, "9th July 2024")] },
        ],
      },

      /* LB-203 ─ Law of Crimes II */
      {
        id: "lb203",
        courseName: "Law of Crimes - II (LB-203)",
        instructor: "Ada Wallace",
        price: "299",
        lastUpdated: "12th July 2024",
        language: "English with conversational Hindi",
        accessibleTill: "31st August, 2024",
        img: "https://images.unsplash.com/photo-1453945619913-79ec89a82c51?w=400&h=250&fit=crop",
        authorBio:
          "We provide top quality semester preparation content specially designed for law students. This course covers IPC offences with concise notes, case summaries, video lectures, and solved PYQs.",
        contents: [
          { topicName: "Offences Against the State (Chapter VI, IPC) [Free Preview]", subTopics: [sub("Offences Against the State (Chapter VI, IPC)", true, "1st July 2024")] },
          { topicName: "Offences Against Public Tranquility – Unlawful Assembly, Rioting", subTopics: [sub("Offences Against Public Tranquility – Unlawful Assembly, Rioting", false, "2nd July 2024")] },
          { topicName: "Offences by or Relating to Public Servants", subTopics: [sub("Offences by or Relating to Public Servants", false, "3rd July 2024")] },
          { topicName: "Hurt, Grievous Hurt, Wrongful Restraint and Confinement", subTopics: [sub("Hurt, Grievous Hurt, Wrongful Restraint and Confinement", false, "4th July 2024")] },
          { topicName: "Assault, Criminal Force, Kidnapping and Abduction", subTopics: [sub("Assault, Criminal Force, Kidnapping and Abduction", false, "5th July 2024")] },
          { topicName: "Rape and Sexual Offences – Sections 375–376 IPC", subTopics: [sub("Rape and Sexual Offences – Sections 375–376 IPC", false, "6th July 2024")] },
          { topicName: "Theft, Extortion, Robbery and Dacoity", subTopics: [sub("Theft, Extortion, Robbery and Dacoity", false, "7th July 2024")] },
          { topicName: "Criminal Misappropriation, Criminal Breach of Trust and Cheating", subTopics: [sub("Criminal Misappropriation, Criminal Breach of Trust and Cheating", false, "8th July 2024")] },
          { topicName: "Mischief and Criminal Trespass", subTopics: [sub("Mischief and Criminal Trespass", false, "9th July 2024")] },
          { topicName: "Offences Relating to Documents and Property Marks", subTopics: [sub("Offences Relating to Documents and Property Marks", false, "10th July 2024")] },
        ],
      },

      /* LB-204 ─ Property Law */
      {
        id: "lb204",
        courseName: "Property Law (LB-204)",
        instructor: "Saumya Sharma",
        price: "299",
        lastUpdated: "8th July 2024",
        language: "English with conversational Hindi",
        accessibleTill: "31st August, 2024",
        img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=250&fit=crop",
        authorBio:
          "We provide top quality semester preparation content specially designed for law students. This course covers the Transfer of Property Act in detail with exam-focused notes and solved PYQs.",
        contents: [
          { topicName: "General Principles – Transfer of Property Act, 1882 [Free Preview]", subTopics: [sub("General Principles – Transfer of Property Act, 1882", true, "1st July 2024")] },
          { topicName: "Transfer by Ostensible Owner and Doctrine of Election", subTopics: [sub("Transfer by Ostensible Owner and Doctrine of Election", false, "2nd July 2024")] },
          { topicName: "Conditions Restraining Transfer – Absolute and Partial Restraints", subTopics: [sub("Conditions Restraining Transfer – Absolute and Partial Restraints", false, "3rd July 2024")] },
          { topicName: "Vested and Contingent Interests, Rule Against Perpetuity", subTopics: [sub("Vested and Contingent Interests, Rule Against Perpetuity", false, "4th July 2024")] },
          { topicName: "Lis Pendens and Fraudulent Transfers", subTopics: [sub("Lis Pendens and Fraudulent Transfers", false, "5th July 2024")] },
          { topicName: "Part Performance (Section 53A)", subTopics: [sub("Part Performance (Section 53A)", false, "6th July 2024")] },
          { topicName: "Sale of Immovable Property – Rights and Liabilities", subTopics: [sub("Sale of Immovable Property – Rights and Liabilities", false, "7th July 2024")] },
          { topicName: "Mortgages – Kinds, Rights of Mortgagor and Mortgagee", subTopics: [sub("Mortgages – Kinds, Rights of Mortgagor and Mortgagee", false, "8th July 2024")] },
          { topicName: "Leases of Immovable Property – Rights and Liabilities", subTopics: [sub("Leases of Immovable Property – Rights and Liabilities", false, "9th July 2024")] },
          { topicName: "Exchange and Gift of Immovable Property", subTopics: [sub("Exchange and Gift of Immovable Property", false, "10th July 2024")] },
        ],
      },

      /* LB-205 ─ Public International Law */
      {
        id: "lb205",
        courseName: "Public International Law (LB-205)",
        instructor: "Radhika Menon",
        price: "299",
        lastUpdated: "5th July 2024",
        language: "English with conversational Hindi",
        accessibleTill: "31st August, 2024",
        img: "https://images.unsplash.com/photo-1526470498-9ae73c665de8?w=400&h=250&fit=crop",
        authorBio:
          "We provide top quality semester preparation content specially designed for law students. This course covers international law with a focus on DU LLB exam patterns and current developments.",
        contents: [
          { topicName: "Nature, Scope and Development of International Law [Free Preview]", subTopics: [sub("Nature, Scope and Development of International Law", true, "1st July 2024")] },
          { topicName: "Sources of International Law – Treaties, Custom, General Principles", subTopics: [sub("Sources of International Law – Treaties, Custom, General Principles", false, "2nd July 2024")] },
          { topicName: "Relationship between International Law and Municipal Law", subTopics: [sub("Relationship between International Law and Municipal Law", false, "3rd July 2024")] },
          { topicName: "State Recognition – De Facto, De Jure and Consequences", subTopics: [sub("State Recognition – De Facto, De Jure and Consequences", false, "4th July 2024")] },
          { topicName: "State Succession and Its Effects on Treaties", subTopics: [sub("State Succession and Its Effects on Treaties", false, "5th July 2024")] },
          { topicName: "Territory – Acquisition and Loss, Law of the Sea", subTopics: [sub("Territory – Acquisition and Loss, Law of the Sea", false, "6th July 2024")] },
          { topicName: "International Human Rights Law – UDHR, ICCPR, ICESCR", subTopics: [sub("International Human Rights Law – UDHR, ICCPR, ICESCR", false, "7th July 2024")] },
          { topicName: "United Nations – Structure, Organs and Peacekeeping", subTopics: [sub("United Nations – Structure, Organs and Peacekeeping", false, "8th July 2024")] },
          { topicName: "Law of Treaties – Vienna Convention on the Law of Treaties, 1969", subTopics: [sub("Law of Treaties – Vienna Convention on the Law of Treaties, 1969", false, "9th July 2024")] },
          { topicName: "State Responsibility – ILC Articles and Reparations", subTopics: [sub("State Responsibility – ILC Articles and Reparations", false, "10th July 2024")] },
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
        lastUpdated: "14th July 2024",
        language: "English with conversational Hindi",
        accessibleTill: "31st August, 2024",
        img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop",
        authorBio:
          "We provide top quality semester preparation content specially designed for law students. This course covers Fundamental Rights, DPSPs and constitutional amendments with exam-ready notes and solved PYQs.",
        contents: [
          { topicName: "Right to Equality – Articles 14, 15, 16, 17 and 18 [Free Preview]", subTopics: [sub("Right to Equality – Articles 14, 15, 16, 17 and 18", true, "1st July 2024")] },
          { topicName: "Right to Freedom – Articles 19-22 and Reasonable Restrictions", subTopics: [sub("Right to Freedom – Articles 19-22 and Reasonable Restrictions", false, "2nd July 2024")] },
          { topicName: "Right Against Exploitation (Articles 23-24)", subTopics: [sub("Right Against Exploitation (Articles 23-24)", false, "3rd July 2024")] },
          { topicName: "Right to Freedom of Religion (Articles 25-28)", subTopics: [sub("Right to Freedom of Religion (Articles 25-28)", false, "4th July 2024")] },
          { topicName: "Cultural and Educational Rights (Articles 29-30)", subTopics: [sub("Cultural and Educational Rights (Articles 29-30)", false, "5th July 2024")] },
          { topicName: "Right to Constitutional Remedies (Article 32) and Writs", subTopics: [sub("Right to Constitutional Remedies (Article 32) and Writs", false, "6th July 2024")] },
          { topicName: "Directive Principles of State Policy – Nature and Justiciability", subTopics: [sub("Directive Principles of State Policy – Nature and Justiciability", false, "7th July 2024")] },
          { topicName: "Fundamental Duties (Article 51A)", subTopics: [sub("Fundamental Duties (Article 51A)", false, "8th July 2024")] },
          { topicName: "Amendment of the Constitution – Procedure and Limitations", subTopics: [sub("Amendment of the Constitution – Procedure and Limitations", false, "9th July 2024")] },
          { topicName: "Emergency Provisions – Articles 352, 356 and 360", subTopics: [sub("Emergency Provisions – Articles 352, 356 and 360", false, "10th July 2024")] },
          { topicName: "Judicial Review and the Basic Structure Doctrine", subTopics: [sub("Judicial Review and the Basic Structure Doctrine", false, "11th July 2024")] },
        ],
      },

      /* LB-402 ─ Administrative Law */
      {
        id: "lb402",
        courseName: "Administrative Law (LB-402)",
        instructor: "Priya Kapoor",
        price: "299",
        lastUpdated: "10th July 2024",
        language: "English with conversational Hindi",
        accessibleTill: "31st August, 2024",
        img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop",
        authorBio:
          "We provide top quality semester preparation content specially designed for law students. This course covers administrative law doctrines, writs and judicial review with concise notes and solved PYQs.",
        contents: [
          { topicName: "Nature, Scope and Development of Administrative Law [Free Preview]", subTopics: [sub("Nature, Scope and Development of Administrative Law", true, "1st July 2024")] },
          { topicName: "Separation of Powers – Theory and Its Application in India", subTopics: [sub("Separation of Powers – Theory and Its Application in India", false, "2nd July 2024")] },
          { topicName: "Delegated Legislation – Kinds, Control and Validity", subTopics: [sub("Delegated Legislation – Kinds, Control and Validity", false, "3rd July 2024")] },
          { topicName: "Natural Justice – Audi Alteram Partem", subTopics: [sub("Natural Justice – Audi Alteram Partem", false, "4th July 2024")] },
          { topicName: "Natural Justice – Nemo Judex in Causa Sua", subTopics: [sub("Natural Justice – Nemo Judex in Causa Sua", false, "5th July 2024")] },
          { topicName: "Judicial Control of Administrative Action", subTopics: [sub("Judicial Control of Administrative Action", false, "6th July 2024")] },
          { topicName: "Writs – Certiorari, Mandamus, Prohibition, Quo Warranto, Habeas Corpus", subTopics: [sub("Writs – Certiorari, Mandamus, Prohibition, Quo Warranto, Habeas Corpus", false, "7th July 2024")] },
          { topicName: "Administrative Tribunals in India", subTopics: [sub("Administrative Tribunals in India", false, "8th July 2024")] },
          { topicName: "Liability of the State in Tort and Contract", subTopics: [sub("Liability of the State in Tort and Contract", false, "9th July 2024")] },
          { topicName: "Public Interest Litigation and Lokpal", subTopics: [sub("Public Interest Litigation and Lokpal", false, "10th July 2024")] },
        ],
      },

      /* LB-403 ─ Labour Law */
      {
        id: "lb403",
        courseName: "Labour Law (LB-403)",
        instructor: "Deepak Malhotra",
        price: "299",
        lastUpdated: "9th July 2024",
        language: "English with conversational Hindi",
        accessibleTill: "31st August, 2024",
        img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=250&fit=crop",
        authorBio:
          "We provide top quality semester preparation content specially designed for law students. This course simplifies industrial legislation for DU LLB students with focused video lectures and notes.",
        contents: [
          { topicName: "Industrial Disputes Act, 1947 – Scope, Application and Definitions [Free Preview]", subTopics: [sub("Industrial Disputes Act, 1947 – Scope, Application and Definitions", true, "1st July 2024")] },
          { topicName: "Industry, Workman and Industrial Dispute – Key Definitions", subTopics: [sub("Industry, Workman and Industrial Dispute – Key Definitions", false, "2nd July 2024")] },
          { topicName: "Strikes, Lockouts and Lay-offs", subTopics: [sub("Strikes, Lockouts and Lay-offs", false, "3rd July 2024")] },
          { topicName: "Retrenchment, Closure and Transfer of Undertaking", subTopics: [sub("Retrenchment, Closure and Transfer of Undertaking", false, "4th July 2024")] },
          { topicName: "Trade Unions Act, 1926 – Registration, Rights and Immunities", subTopics: [sub("Trade Unions Act, 1926 – Registration, Rights and Immunities", false, "5th July 2024")] },
          { topicName: "Contract Labour (Regulation and Abolition) Act, 1970", subTopics: [sub("Contract Labour (Regulation and Abolition) Act, 1970", false, "6th July 2024")] },
          { topicName: "Minimum Wages Act, 1948 – Fixation and Revision", subTopics: [sub("Minimum Wages Act, 1948 – Fixation and Revision", false, "7th July 2024")] },
          { topicName: "Payment of Wages Act, 1936 – Provisions and Deductions", subTopics: [sub("Payment of Wages Act, 1936 – Provisions and Deductions", false, "8th July 2024")] },
          { topicName: "Employees' Provident Fund and Miscellaneous Provisions Act, 1952", subTopics: [sub("Employees' Provident Fund and Miscellaneous Provisions Act, 1952", false, "9th July 2024")] },
          { topicName: "Maternity Benefit Act, 1961 and Equal Remuneration Act, 1976", subTopics: [sub("Maternity Benefit Act, 1961 and Equal Remuneration Act, 1976", false, "10th July 2024")] },
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
      //   accessibleTill: "31st August, 2024",
      //   img: require("./Assets/exam.jpg"),
      //   authorBio:
      //     "We provide top quality semester preparation content specially designed for law students. This course brings feminist legal theory and gender justice law into clear, exam-focused study material.",
      //   contents: [
      //     { topicName: "Feminist Legal Theory – Liberal, Radical and Socialist Feminism [Free Preview]", subTopics: [sub("Feminist Legal Theory – Liberal, Radical and Socialist Feminism", true, "1st July 2024")] },
      //     { topicName: "Gender Justice – Concept and Constitutional Framework", subTopics: [sub("Gender Justice – Concept and Constitutional Framework", false, "2nd July 2024")] },
      //     { topicName: "Dowry Prohibition Act, 1961 and Section 498A IPC", subTopics: [sub("Dowry Prohibition Act, 1961 and Section 498A IPC", false, "3rd July 2024")] },
      //     { topicName: "Protection of Women from Domestic Violence Act, 2005", subTopics: [sub("Protection of Women from Domestic Violence Act, 2005", false, "4th July 2024")] },
      //     { topicName: "Sexual Harassment of Women at Workplace (POSH Act), 2013", subTopics: [sub("Sexual Harassment of Women at Workplace (POSH Act), 2013", false, "5th July 2024")] },
      //     { topicName: "Women in the Criminal Justice System – Victimology", subTopics: [sub("Women in the Criminal Justice System – Victimology", false, "6th July 2024")] },
      //     { topicName: "Reproductive Rights – MTP Act, 1971 and Bodily Autonomy", subTopics: [sub("Reproductive Rights – MTP Act, 1971 and Bodily Autonomy", false, "7th July 2024")] },
      //     { topicName: "Personal Laws and Gender Discrimination – Critical Analysis", subTopics: [sub("Personal Laws and Gender Discrimination – Critical Analysis", false, "8th July 2024")] },
      //     { topicName: "CEDAW – Convention on Elimination of Discrimination Against Women", subTopics: [sub("CEDAW – Convention on Elimination of Discrimination Against Women", false, "9th July 2024")] },
      //   ],
      // },

      /* LB-4033 ─ Competition Law */
      {
        id: "lb4033",
        courseName: "Competition Law | 2023 (LB-4033)",
        instructor: "Arjun Bhatia",
        price: "299",
        lastUpdated: "13th July 2024",
        language: "English with conversational Hindi",
        accessibleTill: "31st August, 2024",
        img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=250&fit=crop",
        authorBio:
          "We provide top quality semester preparation content specially designed for law students. This course covers Competition Act 2002 including the 2023 amendments with case-based study material.",
        contents: [
          { topicName: "Overview of Competition Law – MRTP to CCI [Free Preview]", subTopics: [sub("Overview of Competition Law – MRTP to CCI", true, "1st July 2024")] },
          { topicName: "Competition Act, 2002 – Objectives, Applicability and Definitions", subTopics: [sub("Competition Act, 2002 – Objectives, Applicability and Definitions", false, "2nd July 2024")] },
          { topicName: "Anti-Competitive Agreements – Section 3 (Horizontal and Vertical)", subTopics: [sub("Anti-Competitive Agreements – Section 3 (Horizontal and Vertical)", false, "3rd July 2024")] },
          { topicName: "Abuse of Dominant Position – Section 4", subTopics: [sub("Abuse of Dominant Position – Section 4", false, "4th July 2024")] },
          { topicName: "Combinations – Mergers and Acquisitions (Sections 5 & 6)", subTopics: [sub("Combinations – Mergers and Acquisitions (Sections 5 & 6)", false, "5th July 2024")] },
          { topicName: "Competition Commission of India – Powers and Procedure", subTopics: [sub("Competition Commission of India – Powers and Procedure", false, "6th July 2024")] },
          { topicName: "Penalties, Leniency Programme and Enforcement", subTopics: [sub("Penalties, Leniency Programme and Enforcement", false, "7th July 2024")] },
          { topicName: "Competition Law and Intellectual Property Rights Interface", subTopics: [sub("Competition Law and Intellectual Property Rights Interface", false, "8th July 2024")] },
          { topicName: "Competition (Amendment) Act, 2023 – Key Changes", subTopics: [sub("Competition (Amendment) Act, 2023 – Key Changes", false, "9th July 2024")] },
        ],
      },

      /* LB-4036 ─ IPR Law I */
      {
        id: "lb4036",
        courseName: "Intellectual Property Rights Law - I (LB-4036)",
        instructor: "Tanya Walia",
        price: "299",
        lastUpdated: "7th July 2024",
        language: "English with conversational Hindi",
        accessibleTill: "31st August, 2024",
        img: "https://images.unsplash.com/photo-1485217988980-11786ced9454?w=400&h=250&fit=crop",
        authorBio:
          "We provide top quality semester preparation content specially designed for law students. This course covers Copyright and Trademark law with detailed notes, case summaries and solved PYQs.",
        contents: [
          { topicName: "Overview of Intellectual Property Rights – TRIPS Agreement [Free Preview]", subTopics: [sub("Overview of Intellectual Property Rights – TRIPS Agreement", true, "1st July 2024")] },
          { topicName: "Copyright Law – Berne Convention and Copyright Act, 1957", subTopics: [sub("Copyright Law – Berne Convention and Copyright Act, 1957", false, "2nd July 2024")] },
          { topicName: "Original Works, Authorship and Ownership of Copyright", subTopics: [sub("Original Works, Authorship and Ownership of Copyright", false, "3rd July 2024")] },
          { topicName: "Economic Rights and Moral Rights of Authors", subTopics: [sub("Economic Rights and Moral Rights of Authors", false, "4th July 2024")] },
          { topicName: "Copyright Infringement, Fair Dealing and Remedies", subTopics: [sub("Copyright Infringement, Fair Dealing and Remedies", false, "5th July 2024")] },
          { topicName: "Trade Marks Act, 1999 – Definition, Kinds and Functions", subTopics: [sub("Trade Marks Act, 1999 – Definition, Kinds and Functions", false, "6th July 2024")] },
          { topicName: "Registration and Protection of Trademarks", subTopics: [sub("Registration and Protection of Trademarks", false, "7th July 2024")] },
          { topicName: "Passing Off, Infringement and Remedies under Trade Marks Act", subTopics: [sub("Passing Off, Infringement and Remedies under Trade Marks Act", false, "8th July 2024")] },
          { topicName: "Geographical Indications and Plant Variety Protection", subTopics: [sub("Geographical Indications and Plant Variety Protection", false, "9th July 2024")] },
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
        price: "299",
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
        lastUpdated: "16th July 2024",
        language: "English with conversational Hindi",
        accessibleTill: "31st August, 2024",
        img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=250&fit=crop",
        authorBio:
          "We provide top quality semester preparation content specially designed for law students. This course covers arbitration, mediation and Lok Adalat with practical insights and solved PYQs.",
        contents: [
          { topicName: "Introduction to ADR – Concept, Need and Historical Development [Free Preview]", subTopics: [sub("Introduction to ADR – Concept, Need and Historical Development", true, "1st July 2024")] },
          { topicName: "Arbitration and Conciliation Act, 1996 – Overview and Scope", subTopics: [sub("Arbitration and Conciliation Act, 1996 – Overview and Scope", false, "2nd July 2024")] },
          { topicName: "Arbitration Agreement – Definition, Kinds and Validity", subTopics: [sub("Arbitration Agreement – Definition, Kinds and Validity", false, "3rd July 2024")] },
          { topicName: "Appointment, Jurisdiction and Challenge of Arbitrators", subTopics: [sub("Appointment, Jurisdiction and Challenge of Arbitrators", false, "4th July 2024")] },
          { topicName: "Conduct of Arbitral Proceedings and Arbitral Award", subTopics: [sub("Conduct of Arbitral Proceedings and Arbitral Award", false, "5th July 2024")] },
          { topicName: "Enforcement and Setting Aside of Domestic Arbitral Awards", subTopics: [sub("Enforcement and Setting Aside of Domestic Arbitral Awards", false, "6th July 2024")] },
          { topicName: "International Commercial Arbitration and Foreign Awards", subTopics: [sub("International Commercial Arbitration and Foreign Awards", false, "7th July 2024")] },
          { topicName: "Conciliation and Mediation Act, 2023", subTopics: [sub("Conciliation and Mediation Act, 2023", false, "8th July 2024")] },
          { topicName: "Lok Adalat System – Legal Services Authorities Act, 1987", subTopics: [sub("Lok Adalat System – Legal Services Authorities Act, 1987", false, "9th July 2024")] },
          { topicName: "Online Dispute Resolution (ODR) – Technology and Future", subTopics: [sub("Online Dispute Resolution (ODR) – Technology and Future", false, "10th July 2024")] },
        ],
      },

      /* LB-603 ─ Environmental Law */
      {
        id: "lb603",
        courseName: "Environmental Law (LB-603)",
        instructor: "Kavita Joshi",
        price: "299",
        lastUpdated: "14th July 2024",
        language: "English with conversational Hindi",
        accessibleTill: "31st August, 2024",
        img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop",
        authorBio:
          "We provide top quality semester preparation content specially designed for law students. This course covers Indian and international environmental law with PIL case studies and solved PYQs.",
        contents: [
          { topicName: "Development of Environmental Law in India [Free Preview]", subTopics: [sub("Development of Environmental Law in India", true, "1st July 2024")] },
          { topicName: "Constitutional Provisions – Articles 48A, 51A(g) and Article 21", subTopics: [sub("Constitutional Provisions – Articles 48A, 51A(g) and Article 21", false, "2nd July 2024")] },
          { topicName: "Environment Protection Act, 1986", subTopics: [sub("Environment Protection Act, 1986", false, "3rd July 2024")] },
          { topicName: "Water (Prevention and Control of Pollution) Act, 1974", subTopics: [sub("Water (Prevention and Control of Pollution) Act, 1974", false, "4th July 2024")] },
          { topicName: "Air (Prevention and Control of Pollution) Act, 1981", subTopics: [sub("Air (Prevention and Control of Pollution) Act, 1981", false, "5th July 2024")] },
          { topicName: "Forest Conservation Act, 1980 and Forest Rights Act, 2006", subTopics: [sub("Forest Conservation Act, 1980 and Forest Rights Act, 2006", false, "6th July 2024")] },
          { topicName: "Wildlife Protection Act, 1972 and Biodiversity Act, 2002", subTopics: [sub("Wildlife Protection Act, 1972 and Biodiversity Act, 2002", false, "7th July 2024")] },
          { topicName: "International Environmental Law – Stockholm, Rio Declaration, Agenda 21", subTopics: [sub("International Environmental Law – Stockholm, Rio Declaration, Agenda 21", false, "8th July 2024")] },
          { topicName: "Climate Change, Kyoto Protocol and Paris Agreement", subTopics: [sub("Climate Change, Kyoto Protocol and Paris Agreement", false, "9th July 2024")] },
          { topicName: "National Green Tribunal Act, 2010 and PIL in Environment", subTopics: [sub("National Green Tribunal Act, 2010 and PIL in Environment", false, "10th July 2024")] },
        ],
      },

      /* LB-604 ─ Taxation */
      {
        id: "lb604",
        courseName: "Principles of Taxation Law (LB-604)",
        instructor: "Rohit Verma",
        price: "299",
        lastUpdated: "12th July 2024",
        language: "English with conversational Hindi",
        accessibleTill: "31st August, 2024",
        img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
        authorBio:
          "We provide top quality semester preparation content specially designed for law students. This course makes taxation law accessible with no prior accounting knowledge required and solved PYQs.",
        contents: [
          { topicName: "Constitutional Framework of Taxation in India [Free Preview]", subTopics: [sub("Constitutional Framework of Taxation in India", true, "1st July 2024")] },
          { topicName: "Income Tax Act, 1961 – Basic Concepts, Person, Assessee, Income", subTopics: [sub("Income Tax Act, 1961 – Basic Concepts, Person, Assessee, Income", false, "2nd July 2024")] },
          { topicName: "Residential Status and Scope of Total Income", subTopics: [sub("Residential Status and Scope of Total Income", false, "3rd July 2024")] },
          { topicName: "Heads of Income – Salary and Income from House Property", subTopics: [sub("Heads of Income – Salary and Income from House Property", false, "4th July 2024")] },
          { topicName: "Profits and Gains from Business or Profession", subTopics: [sub("Profits and Gains from Business or Profession", false, "5th July 2024")] },
          { topicName: "Capital Gains – Short Term and Long Term", subTopics: [sub("Capital Gains – Short Term and Long Term", false, "6th July 2024")] },
          { topicName: "Income from Other Sources and Clubbing of Income", subTopics: [sub("Income from Other Sources and Clubbing of Income", false, "7th July 2024")] },
          { topicName: "Deductions under Chapter VI-A and Tax Exemptions", subTopics: [sub("Deductions under Chapter VI-A and Tax Exemptions", false, "8th July 2024")] },
          { topicName: "Goods and Services Tax (GST) – Overview, CGST, SGST, IGST", subTopics: [sub("Goods and Services Tax (GST) – Overview, CGST, SGST, IGST", false, "9th July 2024")] },
          { topicName: "Customs Law – Basic Principles and Valuation", subTopics: [sub("Customs Law – Basic Principles and Valuation", false, "10th July 2024")] },
        ],
      },

      /* LB-6032 ─ Insurance and Banking */
      {
        id: "lb6032",
        courseName: "Insurance and Banking Law (LB-6032)",
        instructor: "Meera Chandrasekaran",
        price: "299",
        lastUpdated: "11th July 2024",
        language: "English with conversational Hindi",
        accessibleTill: "31st August, 2024",
        img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=400&h=250&fit=crop",
        authorBio:
          "We provide top quality semester preparation content specially designed for law students. This course covers insurance and banking regulation with practical examples and exam-focused notes.",
        contents: [
          { topicName: "Insurance – General Principles, Nature and Kinds [Free Preview]", subTopics: [sub("Insurance – General Principles, Nature and Kinds", true, "1st July 2024")] },
          { topicName: "IRDAI – Insurance Regulatory and Development Authority", subTopics: [sub("IRDAI – Insurance Regulatory and Development Authority", false, "2nd July 2024")] },
          { topicName: "Life Insurance – Contract, Nomination, Assignment and Claim", subTopics: [sub("Life Insurance – Contract, Nomination, Assignment and Claim", false, "3rd July 2024")] },
          { topicName: "General Insurance – Marine, Fire and Motor Insurance", subTopics: [sub("General Insurance – Marine, Fire and Motor Insurance", false, "4th July 2024")] },
          { topicName: "Structure of Indian Banking System and Reserve Bank of India", subTopics: [sub("Structure of Indian Banking System and Reserve Bank of India", false, "5th July 2024")] },
          { topicName: "Banking Regulation Act, 1949 – Licensing and Supervision", subTopics: [sub("Banking Regulation Act, 1949 – Licensing and Supervision", false, "6th July 2024")] },
          { topicName: "Banker-Customer Relationship – Rights and Duties", subTopics: [sub("Banker-Customer Relationship – Rights and Duties", false, "7th July 2024")] },
          { topicName: "Negotiable Instruments Act, 1881 – Bills, Cheques and Promissory Notes", subTopics: [sub("Negotiable Instruments Act, 1881 – Bills, Cheques and Promissory Notes", false, "8th July 2024")] },
          { topicName: "SARFAESI Act, 2002 and Insolvency and Bankruptcy Code, 2016", subTopics: [sub("SARFAESI Act, 2002 and Insolvency and Bankruptcy Code, 2016", false, "9th July 2024")] },
        ],
      },
      
    ],
  },
];

export { team, courses };
