<script>
  const services = [
    {
      title: "High Quality Website",
      summary: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam temporibus, itaque corrupti rerum ab recusandae vero!`,
    },
    {
      title: "Client Satisfaction",
      summary: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam temporibus, itaque corrupti rerum ab recusandae vero!`,
    },
    {
      title: "Technology Competence",
      summary: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam temporibus, itaque corrupti rerum ab recusandae vero!`,
    },
    {
      title: "On Time Delivery",
      summary: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam temporibus, itaque corrupti rerum ab recusandae vero!`,
    },
  ];
</script>

<section>
  {#each services as service}
    <div>
      <h2>{service.title}</h2>
      <p>{service.summary}</p>
    </div>
  {/each}
</section>

<style>
  section {
    margin: 1.5em 0;
    display: flex;
    flex-direction: column;
    gap: 1.5em;
  }
  div {
    text-align: center;
    width: 90%;
    margin: auto;
    padding: 1.25em 1.1em;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
  }
  h2 {
    font-size: 1.75rem;
    color: rgb(64, 138, 138);
    font-weight: normal;
    margin-bottom: 0.5em;
  }
  p {
    line-height: 1.5;
    font-size: 1.45rem;
    color: #555;
  }

  @media (min-width: 400px) {
    div {
      max-width: max-content;
    }
  }
  @media (min-width: 576px) {
    p {
      font-size: 1.5rem;
      max-width: 50ch;
      margin: auto;
    }
  }
  @media (min-width: 768px) {
    section {
      width: 90%;
      margin: 1.5em auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    div {
      width: 100%;
    }
  }
  @media (min-width: 992px) {}
</style>
