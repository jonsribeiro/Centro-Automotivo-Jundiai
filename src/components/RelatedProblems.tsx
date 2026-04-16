import Link from "next/link";

interface RelatedProblem {
  title: string;
  href: string;
}

interface RelatedProblemsProps {
  title?: string;
  problems: RelatedProblem[];
}

export function RelatedProblems({ 
  title = "Problemas comuns relacionados", 
  problems 
}: RelatedProblemsProps) {
  return (
    <div className="bg-primary/5 rounded-2xl p-8 mt-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-3">
        {problems.map((problem, index) => (
          <li key={index}>
            <Link 
              href={problem.href}
              className="text-primary hover:underline flex items-center gap-2"
            >
              <span>→</span>
              {problem.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
