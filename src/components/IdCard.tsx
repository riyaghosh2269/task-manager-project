export default function IdCard({
  name,
  employeeId,
  joiningDate,
  emergencyContact,
}: {
  name: string;
  employeeId: string;
  joiningDate: Date;
  emergencyContact?: string;
}) {
  const formattedJoiningDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(joiningDate));

  return (
    <div className="flex items-center justify-center p-6 print:p-0">
      <div className="relative h-[85.6mm] w-[53.98mm] overflow-hidden border border-neutral-300 bg-white font-sans text-neutral-950 shadow-2xl print:border-0 print:shadow-none">
        {/* Background */}
        <div className="absolute left-0 top-[13mm] h-[23mm] w-[34mm] bg-gradient-to-br from-amber-400 to-orange-500 [clip-path:polygon(0_0,100%_55%,62%_100%,0_64%)]" />
        <div className="absolute right-0 top-[13mm] h-[23mm] w-[34mm] bg-gradient-to-bl from-orange-500 to-amber-400 [clip-path:polygon(0_55%,100%_0,100%_64%,38%_100%)]" />
        <div className="absolute bottom-0 left-0 h-[5mm] w-[70%] bg-gradient-to-r from-orange-500 to-amber-400 [clip-path:polygon(0_30%,100%_0,92%_100%,0_100%)]" />
        <div className="absolute bottom-0 right-0 h-[5mm] w-[45%] bg-gradient-to-l from-amber-300 to-orange-400 [clip-path:polygon(12%_0,100%_25%,100%_100%,0_100%)]" />

        <div className="relative z-10 flex h-full flex-col items-center px-[4mm] pt-[3.5mm]">
          {/* Logo */}
          <div className="flex h-[11mm] flex-col items-center justify-start">
            <div className="flex h-[8mm] w-[8mm] rotate-45 items-center justify-center rounded-[1mm] bg-gradient-to-br from-neutral-950 to-amber-900 shadow-sm">
              <span className="-rotate-45 font-serif text-[4mm] font-bold tracking-[-0.4mm] text-amber-400">
                SR
              </span>
            </div>

            <p className="mt-[1.3mm] text-[2.5mm] font-bold tracking-[0.15mm] text-amber-600">
              Loan Services
            </p>
          </div>

          {/* Photo */}
          <div className="mt-[10mm] flex h-[27mm] items-center justify-center">
            <div className="flex h-[25mm] w-[25mm] items-center justify-center overflow-hidden rounded-full border-[1mm] border-white bg-neutral-100 shadow-[0_0_0_0.7mm_rgba(245,158,11,0.9),0_2px_7px_rgba(0,0,0,0.2)]">
              <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-[10mm] w-[10mm] text-neutral-400"
                >
                  <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-5.523 0-10 2.91-10 6.5 0 .828.672 1.5 1.5 1.5h17c.828 0 1.5-.672 1.5-1.5C22 16.91 17.523 14 12 14Z" />
                </svg>

                <span className="mt-[0.8mm] text-[1.6mm] font-semibold text-neutral-400">
                  PHOTO
                </span>
              </div>
            </div>
          </div>

          {/* Designation */}
          <div className="mt-[1mm] flex h-[5.8mm] w-[39mm] items-center justify-center bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 shadow-sm">
            <span className="text-[3mm] font-black uppercase leading-none tracking-[0.15mm]">
              Sales Executive
            </span>
          </div>

          {/* Name */}
          <div className="mt-[1.4mm] flex h-[9mm] w-full flex-col items-center justify-start text-center">
            <p className="text-[2.2mm] font-semibold leading-none text-neutral-600">
              Employee Name
            </p>

            <h1 className="mt-[0.8mm] max-w-[45mm] text-[4mm] font-black uppercase leading-[1.05] tracking-[0.12mm]">
              {name}
            </h1>
          </div>

          {/* Employee Details - moved upward */}
          <div className="mt-[-0.8mm] w-full translate-x-[2mm] px-[1mm]">
            <div className="grid grid-cols-[18mm_2.5mm_1fr] items-center text-[2.55mm] leading-[1.15]">
              <span className="font-bold">Employee ID</span>
              <span className="text-center font-bold">:</span>
              <span className="font-extrabold">{employeeId}</span>
            </div>

            <div className="mt-[1.3mm] grid grid-cols-[18mm_2.5mm_1fr] items-center text-[2.55mm] leading-[1.15]">
              <span className="font-bold">Joining Date</span>
              <span className="text-center font-bold">:</span>
              <span className="font-extrabold">{formattedJoiningDate}</span>
            </div>

            {emergencyContact && (
              <div className="mt-[1.3mm] grid grid-cols-[18mm_2.5mm_1fr] items-start text-[2.55mm] leading-[1.1]">
                <span className="font-bold">
                  Emergency
                  <br />
                  Contact
                </span>

                <span className="text-center font-bold">:</span>

                <span className="font-extrabold tracking-[0.1mm]">
                  {emergencyContact}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Inner Border */}
        <div className="pointer-events-none absolute inset-[1.2mm] border border-amber-500/35" />
      </div>
    </div>
  );
}
