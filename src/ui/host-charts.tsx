import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';

interface GenderRatioChartProps {
  data: { name: string; value: number; color: string }[];
}

export function GenderRatioChart({ data }: GenderRatioChartProps) {
    return (
      <div className="w-full flex flex-col items-center">
        <h3 className="text-sm font-semibold text-center">Gender Ratio</h3>
        <ResponsiveContainer width={120} height={250}>
          <BarChart data={data}>
            <XAxis dataKey="name" tick={{ fill: '#fff', fontSize: 14 }} />
            <YAxis hide />
            <Tooltip formatter={(value) => `${Number(value).toFixed(1)}%`} />
            <Bar dataKey="value" barSize={20}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }


interface AgeGroupChartProps {
  data: { name: string; value: number; color: string }[];
}

export function AgeGroupChart({ data }: AgeGroupChartProps) {
  return (
    <div className="w-full flex flex-col items-center">
      <h3 className="text-sm font-semibold text-center">Age Group Distribution</h3>
      <ResponsiveContainer width={330} height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={75}
            fill="#8884d8"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            animationDuration={800}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value, name) => [`${value} Attendees`, `Age ${name}`]} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
