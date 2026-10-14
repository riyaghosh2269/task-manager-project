
import {
  Document,
  Page,
  View,
  Text,
  Svg,
  Defs,
  LinearGradient,
  Stop,
  Polygon,
  Circle,
  Path,
  StyleSheet,
} from "@react-pdf/renderer";

type IdCardProps = {
  name: string;
  employeeId: string;
  joiningDate: Date;
  emergencyContact?: string;
};

const mm = (value: number) => (value * 72) / 25.4;

const CARD_WIDTH = mm(53.98);
const CARD_HEIGHT = mm(85.6);

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    position: "relative",
    fontFamily: "Helvetica",
    color: "#171717",
  },

  background: {
    position: "absolute",
    top: mm(13),
    left: 0,
    width: CARD_WIDTH,
    height: mm(23),
  },

  bottomBackground: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: CARD_WIDTH,
    height: mm(5),
  },

  border: {
    position: "absolute",
    top: mm(1.2),
    left: mm(1.2),
    width: CARD_WIDTH - mm(2.4),
    height: CARD_HEIGHT - mm(2.4),
    borderWidth: 0.5,
    borderColor: "#fcd89a",
  },

  logoWrapper: {
    position: "absolute",
    top: mm(3.5),
    left: 0,
    width: CARD_WIDTH,
    alignItems: "center",
  },

  logo: {
    width: mm(8),
    height: mm(8),
    backgroundColor: "#292016",
    transform: "rotate(45deg)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },

  logoText: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#fbbf24",
    transform: "rotate(-45deg)",
  },

  company: {
    marginTop: mm(2),
    fontSize: 7,
    fontWeight: "bold",
    color: "#d97706",
    letterSpacing: 0.4,
  },

  photoWrapper: {
    position: "absolute",
    top: mm(24.5),
    left: (CARD_WIDTH - mm(25)) / 2,
    width: mm(25),
    height: mm(25),
    borderRadius: mm(12.5),
    borderWidth: 3,
    borderColor: "#ffffff",
    backgroundColor: "#e5e5e5",
    alignItems: "center",
    justifyContent: "center",
  },

  photoText: {
    fontSize: 5,
    color: "#a3a3a3",
    marginTop: 2,
  },

  designation: {
    position: "absolute",
    top: mm(50.5),
    left: (CARD_WIDTH - mm(39)) / 2,
    width: mm(39),
    height: mm(5.8),
    backgroundColor: "#f59e0b",
    justifyContent: "center",
    alignItems: "center",
  },

  designationText: {
    fontSize: 8.5,
    fontWeight: "bold",
    color: "#171717",
    letterSpacing: 0.3,
  },

  nameWrapper: {
    position: "absolute",
    top: mm(57.7),
    left: mm(3),
    width: CARD_WIDTH - mm(6),
    alignItems: "center",
  },

  nameLabel: {
    fontSize: 6.5,
    color: "#525252",
    fontWeight: "bold",
  },

  name: {
    marginTop: mm(0.8),
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },

  details: {
    position: "absolute",
    top: mm(68),
    left: mm(6),
    width: mm(44),
  },

  detailRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: mm(1.3),
  },

  detailLabel: {
    width: mm(18),
    fontSize: 7,
    fontWeight: "bold",
  },

  colon: {
    width: mm(2.5),
    fontSize: 7,
    fontWeight: "bold",
    textAlign: "center",
  },

  detailValue: {
    flex: 1,
    fontSize: 7,
    fontWeight: "bold",
  },
});

export default function IdCardPdf({
  name,
  employeeId,
  joiningDate,
  emergencyContact,
}: IdCardProps) {
  const formattedJoiningDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(joiningDate));

  return (
    <Document>
      <Page
        size={[CARD_WIDTH, CARD_HEIGHT]}
        style={styles.page}
        wrap={false}
      >
        {/* Orange geometric background */}
        <View style={styles.background}>
          <Svg
            width={CARD_WIDTH}
            height={mm(23)}
            viewBox="0 0 54 23"
          >
            <Defs>
              <LinearGradient
                id="orangeGradient"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <Stop offset="0%" stopColor="#fbbf24" />
                <Stop offset="100%" stopColor="#f97316" />
              </LinearGradient>
            </Defs>

            <Polygon
              points="0,0 34,12.65 21.08,23 0,14.72"
              fill="url(#orangeGradient)"
            />

            <Polygon
              points="20,12.65 54,0 54,14.72 32.92,23"
              fill="#fb8500"
            />
          </Svg>
        </View>

        {/* Bottom background */}
        <View style={styles.bottomBackground}>
          <Svg
            width={CARD_WIDTH}
            height={mm(5)}
            viewBox="0 0 54 5"
          >
            <Polygon
              points="0,1.5 37.8,0 34.8,5 0,5"
              fill="#f97316"
            />

            <Polygon
              points="32,0 54,1.25 54,5 29,5"
              fill="#fbbf24"
            />
          </Svg>
        </View>

        {/* Inner border */}
        <View style={styles.border} />

        {/* Logo */}
        <View style={styles.logoWrapper}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>SR</Text>
          </View>

          <Text style={styles.company}>
            Loan Services
          </Text>
        </View>

        {/* Photo placeholder */}
        <View style={styles.photoWrapper}>
          <Svg width={45} height={45} viewBox="0 0 24 24">
            <Circle
              cx={12}
              cy={7}
              r={5}
              fill="#a3a3a3"
            />

            <Path
              d="M2 22 C2 14 22 14 22 22 Z"
              fill="#a3a3a3"
            />
          </Svg>

          <Text style={styles.photoText}>
            PHOTO
          </Text>
        </View>

        {/* Designation */}
        <View style={styles.designation}>
          <Text style={styles.designationText}>
            SALES EXECUTIVE
          </Text>
        </View>

        {/* Employee name */}
        <View style={styles.nameWrapper}>
          <Text style={styles.nameLabel}>
            Employee Name
          </Text>

          <Text style={styles.name}>
            {name}
          </Text>
        </View>

        {/* Employee details */}
        <View style={styles.details}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>
              Employee ID
            </Text>

            <Text style={styles.colon}>:</Text>

            <Text style={styles.detailValue}>
              {employeeId}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>
              Joining Date
            </Text>

            <Text style={styles.colon}>:</Text>

            <Text style={styles.detailValue}>
              {formattedJoiningDate}
            </Text>
          </View>

          {emergencyContact && (
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>
                {"Emergency\nContact"}
              </Text>

              <Text style={styles.colon}>:</Text>

              <Text style={styles.detailValue}>
                {emergencyContact}
              </Text>
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
}
