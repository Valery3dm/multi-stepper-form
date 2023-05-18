import List from '@/components/screens/list';
import Layout from '@/common/Layout/Layout';

type FormData = {
  _id: string;
  projectName: string;
  projectURL: string;
  projectCategory: string;
  projectDetails: string;
  workers: number;
  productLaunch: string;
  email: string;
};

type ListPageProps = {
  projects: FormData[];
};

export default function ListPage({ projects }: ListPageProps) {
  return (
    <Layout title="List of Projects">
      <List projects={projects} />
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch(
      `https://multi-stepper-form-4ir1xn0fm-valery3dm.vercel.app/api/projects`,
      {
        method: 'GET',
      },
    );
    const data = await response.json();

    return {
      props: {
        projects: data,
      },
    };
  } catch (error) {
    console.error('Fetch Error', error);
    return {
      props: {
        data: [],
      },
    };
  }
}
