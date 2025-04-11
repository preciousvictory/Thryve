import { FeatureProps } from "@/types/components"

const FeatureCard = ({ title, desc, Icon }: FeatureProps) => {
    return (
        <div className="bg-[var(--foreground2)] w-full h-full text-white rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 flex flex-col items-start justify-baseline gap-4">
            <span>
                <Icon />
            </span>
            <h2 className="text-2xl w-1/3">{title}</h2>
            <p className="text-[var(--gray2)]">{desc}</p>
        </div>
    )
}

export default FeatureCard