import { STAT_BLOCKS } from "@/lib/adminConstants";
import StatBlock from "@/components/admin/StatBlock";

const AdminDashboardPage = () => {
  return (
    <>
      <h1 className="section-admin-intro-text">Dashboard</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        {STAT_BLOCKS.map((stat) => {
          const Icon = stat.icon;
          return (
            <StatBlock
              key={stat.title}
              title={stat.title}
              value={stat.value}
              Icon={Icon}
            />
          );
        })}
      </div>
    </>
  );
};

export default AdminDashboardPage;
