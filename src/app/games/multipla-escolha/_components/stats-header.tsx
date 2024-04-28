import QrCodeModal from "@/components/qrcode-modal";

interface StatsHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
  qrCodeImg?: string;
}
export default function StatsHeader({
  currentQuestion,
  totalQuestions,
  qrCodeImg,
}: StatsHeaderProps) {
  return (
    <header className="bg-question-header flex items-center justify-between py-8 px-7 rounded-t-lg">
      <h2 className="text-4xl">
        Questão {`${currentQuestion}/${totalQuestions}`}
      </h2>
    </header>
  );
}
