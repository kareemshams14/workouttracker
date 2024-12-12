import { Card } from 'react-bootstrap';
import { LucideIcon } from 'lucide-react';

interface SummaryCardProps {
  title: string;
  value: number | string;
  Icon: LucideIcon;
}

export function SummaryCard({ title, value, Icon }: SummaryCardProps) {
  return (
    <Card className="mb-4">
      <Card.Body>
        <div className="d-flex align-items-center">
          <Icon className="me-3" size={24} />
          <div>
            <Card.Title>{title}</Card.Title>
            <h3>{value}</h3>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}