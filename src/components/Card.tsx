import { Card, CardBody, CardFooter, CardHeader, Divider, Link } from "@nextui-org/react";
import { Icone } from "./Icone";

interface CardStatsProps {
    icon: string;
    title: string;
    value: number;
}

export default function CardStats({icon, title, value}: CardStatsProps) {
    return (
        <Card className="max-w-[400px]" style={{ backgroundColor: 'white', color: 'black' }}>
            <CardHeader className="flex gap-3">
                <Icone nome={icon} />
                <p className="text-md">{title}</p>
            </CardHeader>
            <CardBody>
                <p className="text-4xl">R$ {value.toFixed(2)}</p>
            </CardBody>
            <Divider />
            <CardFooter>
                <Link href="/movimentacoes" className="text-xs">
                    ver detalhes
                </Link>
            </CardFooter>
        </Card>
    );
}