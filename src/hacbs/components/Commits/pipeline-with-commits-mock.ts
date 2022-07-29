import { PipelineRunKind } from '../../types';

export const pipelineWithCommits: PipelineRunKind[] = [
  {
    apiVersion: 'tekton.dev/v1beta1',
    plural: 'pipeline runs',
    apiGroup: 'tekton.dev',
    version: 'v1alpha1',
    namespaced: true,
    kind: 'PipelineRun',
    metadata: {
      annotations: {
        'build.appstudio.openshift.io/image':
          'quay.io/redhat-appstudio/user-workload:abhindas-java-springboot-sample',
        'build.appstudio.openshift.io/repo':
          'https://github.com/devfile-samples/devfile-sample-java-springboot-basic.git',
        'chains.tekton.dev/retries': '3',
        'chains.tekton.dev/signed': 'failed',
        'chains.tekton.dev/transparency':
          'http://rekor-server.enterprise-contract-service.svc:3000/api/v1/log/entries?logIndex=3143',
        'results.tekton.dev/record':
          'abhindas/results/558677f8-e01c-4d15-8729-5e838bd492aa/records/558677f8-e01c-4d15-8729-5e838bd492aa',
        'results.tekton.dev/result': 'abhindas/results/558677f8-e01c-4d15-8729-5e838bd492aa',
        'build.appstudio.redhat.com/commit_sha': 'commit123',
        'build.appstudio.redhat.com/target_branch': 'branch_1',
      },
      creationTimestamp: '2022-07-19T11:35:46Z',
      generation: 1,
      labels: {
        'build.appstudio.openshift.io/application': 'purple-mermaid-app',
        'build.appstudio.openshift.io/build': 'true',
      },
      name: 'java-springboot-sample-x778q',
      namespace: 'abhindas',
      ownerReferences: [
        {
          apiVersion: 'appstudio.redhat.com/v1alpha1',
          kind: 'Component',
          name: 'java-springboot-sample',
          uid: '52b51aec-d31c-4ae9-841e-1cac635c28d2',
        },
      ],
      resourceVersion: '804999040',
      uid: '558677f8-e01c-4d15-8729-5e838bd492aa',
    },
  },
  {
    apiVersion: 'tekton.dev/v1beta1',
    kind: 'PipelineRun',
    plural: 'pipeline runs',
    apiGroup: 'tekton.dev',
    version: 'v1alpha1',
    namespaced: true,
    metadata: {
      annotations: {
        'build.appstudio.openshift.io/image':
          'quay.io/redhat-appstudio/user-workload:abhindas-nodejs-sample',
        'build.appstudio.openshift.io/repo':
          'https://github.com/nodeshift-starters/devfile-sample.git',
        'chains.tekton.dev/retries': '3',
        'chains.tekton.dev/signed': 'failed',
        'chains.tekton.dev/transparency':
          'https://rekor.sigstore.dev/api/v1/log/entries?logIndex=2717932',
        'results.tekton.dev/record':
          'abhindas/results/358168a2-e2f1-4fc6-90a5-90ad80079e17/records/358168a2-e2f1-4fc6-90a5-90ad80079e17',
        'results.tekton.dev/result': 'abhindas/results/358168a2-e2f1-4fc6-90a5-90ad80079e17',
        'build.appstudio.redhat.com/commit_sha': 'commit14rt',
        'build.appstudio.redhat.com/target_branch': 'branch_b',
      },
      creationTimestamp: '2022-06-20T12:47:24Z',
      generateName: 'nodejs-sample-',
      generation: 1,
      labels: {
        'build.appstudio.openshift.io/application': 'purple-mermaid-app',
        'build.appstudio.openshift.io/build': 'true',
        'build.appstudio.openshift.io/component': 'nodejs-sample',
        'build.appstudio.openshift.io/type': 'build',
        'build.appstudio.openshift.io/version': '0.1',
        'pipelines.appstudio.openshift.io/type': 'build',
        'pipelines.openshift.io/runtime': 'generic',
        'pipelines.openshift.io/strategy': 'docker',
        'pipelines.openshift.io/used-by': 'build-cloud',
        'tekton.dev/pipeline': 'docker-build',
      },
      name: 'nodejs-sample-zth6t',
      namespace: 'abhindas',
      ownerReferences: [
        {
          apiVersion: 'appstudio.redhat.com/v1alpha1',
          kind: 'Component',
          name: 'nodejs-sample',
          uid: '85cf4351-2cce-4816-9bd3-d04f8c6a98b8',
        },
      ],
      resourceVersion: '644928943',
      uid: '358168a2-e2f1-4fc6-90a5-90ad80079e17',
    },
  },
  {
    apiVersion: 'tekton.dev/v1beta1',
    kind: 'PipelineRun',
    plural: 'pipeline runs',
    apiGroup: 'tekton.dev',
    version: 'v1alpha1',
    namespaced: true,
    metadata: {
      annotations: {
        'build.appstudio.openshift.io/image':
          'quay.io/redhat-appstudio/user-workload:abhindas-nodejs-sample',
        'build.appstudio.openshift.io/repo':
          'https://github.com/nodeshift-starters/devfile-sample.git',
        'chains.tekton.dev/retries': '3',
        'chains.tekton.dev/signed': 'failed',
        'chains.tekton.dev/transparency':
          'https://rekor.sigstore.dev/api/v1/log/entries?logIndex=2717932',
        'results.tekton.dev/record':
          'abhindas/results/358168a2-e2f1-4fc6-90a5-90ad80079e17/records/358168a2-e2f1-4fc6-90a5-90ad80079e17',
        'results.tekton.dev/result': 'abhindas/results/358168a2-e2f1-4fc6-90a5-90ad80079e17',
        'build.appstudio.redhat.com/commit_sha': 'commit14rt',
        'build.appstudio.redhat.com/target_branch': 'branch_b',
      },
      creationTimestamp: '2022-06-20T12:47:24Z',
      generateName: 'nodejs-sample-',
      generation: 1,
      labels: {
        'build.appstudio.openshift.io/application': 'purple-mermaid-app',
        'build.appstudio.openshift.io/build': 'true',
        'build.appstudio.openshift.io/component': 'nodejs-sample',
        'build.appstudio.openshift.io/type': 'build',
        'build.appstudio.openshift.io/version': '0.1',
        'pipelines.appstudio.openshift.io/type': 'build',
        'pipelines.openshift.io/runtime': 'generic',
        'pipelines.openshift.io/strategy': 'docker',
        'pipelines.openshift.io/used-by': 'build-cloud',
        'tekton.dev/pipeline': 'docker-build',
      },
      name: 'nodejs-sample-zth6t',
      namespace: 'abhindas',
      ownerReferences: [
        {
          apiVersion: 'appstudio.redhat.com/v1alpha1',
          kind: 'Component',
          name: 'nodejs-sample',
          uid: '85cf4351-2cce-4816-9bd3-d04f8c6a98b8',
        },
      ],
      resourceVersion: '644928943',
      uid: '358168a2-e2f1-4fc6-90a5-90ad80079e17',
    },
    spec: {
      params: [
        {
          name: 'git-url',
          value: 'https://github.com/nodeshift-starters/devfile-sample.git',
        },
        {
          name: 'output-image',
          value: 'quay.io/redhat-appstudio/user-workload:abhindas-nodejs-sample',
        },
        {
          name: 'dockerfile',
          value: 'Dockerfile',
        },
        {
          name: 'path-context',
          value: '.',
        },
      ],
      pipelineRef: {
        bundle:
          'quay.io/redhat-appstudio/build-templates-bundle:ab259a6fef091698b0fc145537338fa78f521c1f',
        name: 'docker-build',
      },
      serviceAccountName: 'pipeline',
      timeout: '1h0m0s',
      workspaces: [
        {
          name: 'workspace',
          persistentVolumeClaim: {
            claimName: 'appstudio',
          },
          subPath: 'nodejs-sample/initialbuild-2022-Jun-20_12-47-24',
        },
      ],
    },
    status: {
      completionTime: '2022-06-20T12:49:27Z',
      conditions: [
        {
          lastTransitionTime: '2022-06-20T12:49:27Z',
          message: 'Tasks Completed: 5 (Failed: 0, Cancelled 0), Skipped: 0',
          reason: 'Succeeded',
          status: 'True',
          type: 'Succeeded',
        },
      ],
      startTime: '2022-06-20T12:47:26Z',
    },
  },
  {
    apiVersion: 'tekton.dev/v1beta1',
    kind: 'PipelineRun',
    plural: 'pipeline runs',
    apiGroup: 'tekton.dev',
    version: 'v1alpha1',
    namespaced: true,
    metadata: {
      annotations: {
        'build.appstudio.openshift.io/image':
          'quay.io/redhat-appstudio/user-workload:abhindas-nodejs-sample',
        'build.appstudio.openshift.io/repo':
          'https://github.com/nodeshift-starters/devfile-sample.git',
        'chains.tekton.dev/retries': '3',
        'chains.tekton.dev/signed': 'failed',
        'chains.tekton.dev/transparency':
          'https://rekor.sigstore.dev/api/v1/log/entries?logIndex=2717932',
        'results.tekton.dev/record':
          'abhindas/results/358168a2-e2f1-4fc6-90a5-90ad80079e17/records/358168a2-e2f1-4fc6-90a5-90ad80079e17',
        'results.tekton.dev/result': 'abhindas/results/358168a2-e2f1-4fc6-90a5-90ad80079e17',
        'build.appstudio.redhat.com/commit_sha': 'commit14rt',
        'build.appstudio.redhat.com/target_branch': 'branch_b',
      },
      creationTimestamp: '2022-06-20T12:47:24Z',
      generateName: 'nodejs-sample-',
      generation: 1,
      labels: {
        'build.appstudio.openshift.io/application': 'purple-mermaid-app',
        'build.appstudio.openshift.io/build': 'true',
        'build.appstudio.openshift.io/component': 'nodejs-sample',
        'build.appstudio.openshift.io/type': 'build',
        'build.appstudio.openshift.io/version': '0.1',
        'pipelines.appstudio.openshift.io/type': 'build',
        'pipelines.openshift.io/runtime': 'generic',
        'pipelines.openshift.io/strategy': 'docker',
        'pipelines.openshift.io/used-by': 'build-cloud',
        'tekton.dev/pipeline': 'docker-build',
      },
      name: 'nodejs-sample-zth6t',
      namespace: 'abhindas',
      ownerReferences: [
        {
          apiVersion: 'appstudio.redhat.com/v1alpha1',
          kind: 'Component',
          name: 'nodejs-sample',
          uid: '85cf4351-2cce-4816-9bd3-d04f8c6a98b8',
        },
      ],
      resourceVersion: '644928943',
      uid: '358168a2-e2f1-4fc6-90a5-90ad80079e17',
    },
    status: {
      completionTime: '2022-06-20T12:49:27Z',
      conditions: [
        {
          lastTransitionTime: '2022-06-20T12:49:27Z',
          message: 'Tasks Completed: 5 (Failed: 0, Cancelled 0), Skipped: 0',
          reason: 'Succeeded',
          status: 'True',
          type: 'Succeeded',
        },
      ],
      startTime: '2022-06-20T12:47:26Z',
    },
  },
  {
    apiVersion: 'tekton.dev/v1beta1',
    kind: 'PipelineRun',
    plural: 'pipeline runs',
    apiGroup: 'tekton.dev',
    version: 'v1alpha1',
    namespaced: true,
    metadata: {
      annotations: {
        'build.appstudio.openshift.io/image':
          'quay.io/redhat-appstudio/user-workload:abhindas-nodejs-sample',
        'build.appstudio.openshift.io/repo':
          'https://github.com/nodeshift-starters/devfile-sample.git',
        'chains.tekton.dev/retries': '3',
        'chains.tekton.dev/signed': 'failed',
        'chains.tekton.dev/transparency':
          'https://rekor.sigstore.dev/api/v1/log/entries?logIndex=2717932',
        'results.tekton.dev/record':
          'abhindas/results/358168a2-e2f1-4fc6-90a5-90ad80079e17/records/358168a2-e2f1-4fc6-90a5-90ad80079e17',
        'results.tekton.dev/result': 'abhindas/results/358168a2-e2f1-4fc6-90a5-90ad80079e17',
      },
      creationTimestamp: '2022-06-20T12:47:24Z',
      generateName: 'nodejs-sample-',
      generation: 1,
      labels: {
        'build.appstudio.openshift.io/application': 'purple-mermaid-app',
        'build.appstudio.openshift.io/build': 'true',
        'build.appstudio.openshift.io/component': 'nodejs-sample',
        'build.appstudio.openshift.io/type': 'build',
        'build.appstudio.openshift.io/version': '0.1',
        'pipelines.appstudio.openshift.io/type': 'build',
        'pipelines.openshift.io/runtime': 'generic',
        'pipelines.openshift.io/strategy': 'docker',
        'pipelines.openshift.io/used-by': 'build-cloud',
        'tekton.dev/pipeline': 'docker-build',
      },
      name: 'nodejs-sample-zth6t',
      namespace: 'abhindas',
      ownerReferences: [
        {
          apiVersion: 'appstudio.redhat.com/v1alpha1',
          kind: 'Component',
          name: 'nodejs-sample',
          uid: '85cf4351-2cce-4816-9bd3-d04f8c6a98b8',
        },
      ],
      resourceVersion: '644928943',
      uid: '358168a2-e2f1-4fc6-90a5-90ad80079e17',
    },
    status: {
      completionTime: '2022-06-20T12:49:27Z',
      conditions: [
        {
          lastTransitionTime: '2022-06-20T12:49:27Z',
          message: 'Tasks Completed: 5 (Failed: 0, Cancelled 0), Skipped: 0',
          reason: 'Succeeded',
          status: 'True',
          type: 'Succeeded',
        },
      ],
      startTime: '2022-06-20T12:47:26Z',
    },
  },
  {
    apiVersion: 'tekton.dev/v1beta1',
    kind: 'PipelineRun',
    plural: 'pipeline runs',
    apiGroup: 'tekton.dev',
    version: 'v1alpha1',
    namespaced: true,
    metadata: {
      annotations: {
        'build.appstudio.openshift.io/image':
          'quay.io/redhat-appstudio/user-workload:abhindas-nodejs-sample',
        'build.appstudio.openshift.io/repo':
          'https://github.com/nodeshift-starters/devfile-sample.git',
        'chains.tekton.dev/retries': '3',
        'chains.tekton.dev/signed': 'failed',
        'chains.tekton.dev/transparency':
          'https://rekor.sigstore.dev/api/v1/log/entries?logIndex=2717932',
        'results.tekton.dev/record':
          'abhindas/results/358168a2-e2f1-4fc6-90a5-90ad80079e17/records/358168a2-e2f1-4fc6-90a5-90ad80079e17',
        'results.tekton.dev/result': 'abhindas/results/358168a2-e2f1-4fc6-90a5-90ad80079e17',
        'build.appstudio.redhat.com/commit_sha': 'commit14rt',
        'build.appstudio.redhat.com/target_branch': 'branch_b',
      },
      creationTimestamp: '2022-06-20T12:47:24Z',
      generateName: 'nodejs-sample-',
      generation: 1,
      labels: {
        'build.appstudio.openshift.io/application': 'purple-mermaid-app',
        'build.appstudio.openshift.io/build': 'true',
        'build.appstudio.openshift.io/component': 'nodejs-sample',
        'build.appstudio.openshift.io/type': 'build',
        'build.appstudio.openshift.io/version': '0.1',
        'pipelines.appstudio.openshift.io/type': 'build',
        'pipelines.openshift.io/runtime': 'generic',
        'pipelines.openshift.io/strategy': 'docker',
        'pipelines.openshift.io/used-by': 'build-cloud',
        'tekton.dev/pipeline': 'docker-build',
      },
      name: 'nodejs-sample-zth6t',
      namespace: 'abhindas',
      ownerReferences: [
        {
          apiVersion: 'appstudio.redhat.com/v1alpha1',
          kind: 'Component',
          name: 'nodejs-sample',
          uid: '85cf4351-2cce-4816-9bd3-d04f8c6a98b8',
        },
      ],
      resourceVersion: '644928943',
      uid: '358168a2-e2f1-4fc6-90a5-90ad80079e17',
    },
    spec: {
      params: [
        {
          name: 'git-url',
          value: 'https://github.com/nodeshift-starters/devfile-sample.git',
        },
        {
          name: 'output-image',
          value: 'quay.io/redhat-appstudio/user-workload:abhindas-nodejs-sample',
        },
        {
          name: 'dockerfile',
          value: 'Dockerfile',
        },
        {
          name: 'path-context',
          value: '.',
        },
      ],
      pipelineRef: {
        bundle:
          'quay.io/redhat-appstudio/build-templates-bundle:ab259a6fef091698b0fc145537338fa78f521c1f',
        name: 'docker-build',
      },
      serviceAccountName: 'pipeline',
      timeout: '1h0m0s',
      workspaces: [
        {
          name: 'workspace',
          persistentVolumeClaim: {
            claimName: 'appstudio',
          },
          subPath: 'nodejs-sample/initialbuild-2022-Jun-20_12-47-24',
        },
      ],
    },
    status: {
      completionTime: '2022-06-20T12:49:27Z',
      conditions: [
        {
          lastTransitionTime: '2022-06-20T12:49:27Z',
          message: 'Tasks Completed: 5 (Failed: 0, Cancelled 0), Skipped: 0',
          reason: 'Succeeded',
          status: 'True',
          type: 'Succeeded',
        },
      ],
      startTime: '2022-06-20T12:47:26Z',
    },
  },
  {
    apiVersion: 'tekton.dev/v1beta1',
    kind: 'PipelineRun',
    plural: 'pipeline runs',
    apiGroup: 'tekton.dev',
    version: 'v1alpha1',
    namespaced: true,
    metadata: {
      annotations: {
        'build.appstudio.openshift.io/image':
          'quay.io/redhat-appstudio/user-workload:abhindas-nodejs-sample',
        'build.appstudio.redhat.com/commit_sha': 'commit123',
        'build.appstudio.redhat.com/target_branch': 'branch_1',
      },
      creationTimestamp: '2022-06-20T12:47:24Z',
      generateName: 'nodejs-sample-',
      generation: 1,
      labels: {},
    },
  },
  {
    apiVersion: 'tekton.dev/v1beta1',
    kind: 'PipelineRun',
    plural: 'pipeline runs',
    apiGroup: 'tekton.dev',
    version: 'v1alpha1',
    namespaced: true,
    metadata: {
      annotations: {
        'build.appstudio.openshift.io/image':
          'quay.io/redhat-appstudio/user-workload:abhindas-nodejs-sample',
        'build.appstudio.redhat.com/commit_sha': 'commit123',
        'build.appstudio.redhat.com/target_branch': 'branch_1',
      },
      creationTimestamp: '2022-06-20T12:47:24Z',
      name: 'nodejs-sample-3',
      generation: 1,
      labels: {},
    },
  },
  {
    apiVersion: 'tekton.dev/v1beta1',
    kind: 'PipelineRun',
    plural: 'pipeline runs',
    apiGroup: 'tekton.dev',
    version: 'v1alpha1',
    namespaced: true,
    metadata: {
      annotations: {
        'build.appstudio.openshift.io/image':
          'quay.io/redhat-appstudio/user-workload:abhindas-nodejs-sample',
        'build.appstudio.redhat.com/commit_sha': 'commit123',
        'build.appstudio.redhat.com/target_branch': 'branch_1',
      },
      creationTimestamp: '2022-06-20T12:47:24Z',
      generateName: 'nodejs-sample-',
      generation: 1,
      labels: {},
    },
  },
  {
    apiVersion: 'tekton.dev/v1beta1',
    kind: 'PipelineRun',
    plural: 'pipeline runs',
    apiGroup: 'tekton.dev',
    version: 'v1alpha1',
    namespaced: true,
    metadata: {
      annotations: {
        'build.appstudio.openshift.io/image':
          'quay.io/redhat-appstudio/user-workload:abhindas-nodejs-sample',
        'build.appstudio.redhat.com/commit_sha': 'commit123',
        'build.appstudio.redhat.com/target_branch': 'branch_1',
      },
      creationTimestamp: '2022-06-20T12:47:24Z',
      name: 'nodejs-sample-4',
      generation: 1,
      labels: {},
    },
  },
  {
    apiVersion: 'tekton.dev/v1beta1',
    kind: 'PipelineRun',
    plural: 'pipeline runs',
    apiGroup: 'tekton.dev',
    version: 'v1alpha1',
    namespaced: true,
    metadata: {
      annotations: {
        'build.appstudio.openshift.io/image':
          'quay.io/redhat-appstudio/user-workload:abhindas-nodejs-sample',
        'build.appstudio.redhat.com/commit_sha': 'commit-ment',
        'build.appstudio.redhat.com/target_branch': 'branch_ment',
      },
      creationTimestamp: '2022-06-20T12:47:24Z',
      name: 'nodejs-sample-5',
      generation: 1,
      labels: {},
    },
  },
  {
    apiVersion: 'tekton.dev/v1beta1',
    kind: 'PipelineRun',
    plural: 'pipeline runs',
    apiGroup: 'tekton.dev',
    version: 'v1alpha1',
    namespaced: true,
    metadata: {
      annotations: {
        'build.appstudio.openshift.io/image':
          'quay.io/redhat-appstudio/user-workload:abhindas-nodejs-sample',
        'build.appstudio.redhat.com/commit_sha': 'commitson',
        'build.appstudio.redhat.com/target_branch': 'branch_1',
      },
      creationTimestamp: '2022-06-20T12:47:24Z',
      name: 'sample-1',
      generation: 1,
      labels: {},
    },
  },
  {
    apiVersion: 'tekton.dev/v1beta1',
    kind: 'PipelineRun',
    plural: 'pipeline runs',
    apiGroup: 'tekton.dev',
    version: 'v1alpha1',
    namespaced: true,
    metadata: {
      annotations: {
        'build.appstudio.openshift.io/image':
          'quay.io/redhat-appstudio/user-workload:abhindas-nodejs-sample',
        'build.appstudio.redhat.com/commit_sha': 'commit_try1',
        'build.appstudio.redhat.com/target_branch': 'branch_1',
      },
      creationTimestamp: '2022-06-20T12:47:24Z',
      name: 'sample-2',
      generation: 1,
      labels: {},
    },
  },
  {
    apiVersion: 'tekton.dev/v1beta1',
    kind: 'PipelineRun',
    plural: 'pipeline runs',
    apiGroup: 'tekton.dev',
    version: 'v1alpha1',
    namespaced: true,
    metadata: {
      annotations: {
        'build.appstudio.openshift.io/image':
          'quay.io/redhat-appstudio/user-workload:abhindas-nodejs-sample',
        'build.appstudio.redhat.com/commit_sha': 'ertxyz',
        'build.appstudio.redhat.com/target_branch': 'branch_1',
      },
      creationTimestamp: '2022-06-20T12:47:24Z',
      name: 'sample-3',
      generation: 1,
      labels: {},
    },
  },
  {
    apiVersion: 'tekton.dev/v1beta1',
    kind: 'PipelineRun',
    plural: 'pipeline runs',
    apiGroup: 'tekton.dev',
    version: 'v1alpha1',
    namespaced: true,
    metadata: {
      annotations: {
        'build.appstudio.openshift.io/image':
          'quay.io/redhat-appstudio/user-workload:abhindas-nodejs-sample',
        'build.appstudio.redhat.com/commit_sha': 'commit_try1',
        'build.appstudio.redhat.com/target_branch': 'branch_try',
      },
      creationTimestamp: '2022-06-20T12:47:24Z',
      name: 'sample-4',
      generation: 1,
      labels: {},
    },
  },
  {
    apiVersion: 'tekton.dev/v1beta1',
    kind: 'PipelineRun',
    plural: 'pipeline runs',
    apiGroup: 'tekton.dev',
    version: 'v1alpha1',
    namespaced: true,
    metadata: {
      annotations: {
        'build.appstudio.openshift.io/image':
          'quay.io/redhat-appstudio/user-workload:abhindas-nodejs-sample',
        'build.appstudio.redhat.com/commit_sha': 'commitabc',
        'build.appstudio.redhat.com/target_branch': 'branch_x',
      },
      creationTimestamp: '2022-06-20T12:47:24Z',
      name: 'sample-5',
      generation: 1,
      labels: {},
    },
  },
  {
    apiVersion: 'tekton.dev/v1beta1',
    kind: 'PipelineRun',
    plural: 'pipeline runs',
    apiGroup: 'tekton.dev',
    version: 'v1alpha1',
    namespaced: true,
    metadata: {
      annotations: {
        'build.appstudio.openshift.io/image':
          'quay.io/redhat-appstudio/user-workload:abhindas-nodejs-sample',
        'build.appstudio.redhat.com/commit_sha': 'ertxyz',
        'build.appstudio.redhat.com/target_branch': 'branch_1',
      },
      creationTimestamp: '2022-06-20T12:47:24Z',
      name: 'sample-6',
      generation: 1,
      labels: {},
    },
  },
  {
    apiVersion: 'tekton.dev/v1beta1',
    kind: 'PipelineRun',
    plural: 'pipeline runs',
    apiGroup: 'tekton.dev',
    version: 'v1alpha1',
    namespaced: true,
    metadata: {
      annotations: {
        'build.appstudio.openshift.io/image':
          'quay.io/redhat-appstudio/user-workload:abhindas-nodejs-sample',
      },
      creationTimestamp: '2022-06-20T12:47:24Z',
      name: 'nodejs-sample-1',
      generation: 1,
      labels: {},
    },
  },
  {
    apiVersion: 'tekton.dev/v1beta1',
    kind: 'PipelineRun',
    plural: 'pipeline runs',
    apiGroup: 'tekton.dev',
    version: 'v1alpha1',
    namespaced: true,
    metadata: {
      annotations: {
        'build.appstudio.openshift.io/image':
          'quay.io/redhat-appstudio/user-workload:abhindas-nodejs-sample',
      },
      creationTimestamp: '2022-06-20T12:47:24Z',
      name: 'nodejs-sample-2',
      generation: 1,
      labels: {},
    },
  },
  {
    apiVersion: 'tekton.dev/v1beta1',
    kind: 'PipelineRun',
    plural: 'pipeline runs',
    apiGroup: 'tekton.dev',
    version: 'v1alpha1',
    namespaced: true,
    metadata: {
      annotations: {
        'build.appstudio.openshift.io/image':
          'quay.io/redhat-appstudio/user-workload:abhindas-nodejs-sample',
        'build.appstudio.redhat.com/commit_sha': 'commitabc',
        'build.appstudio.redhat.com/target_branch': 'branch_x',
      },
      creationTimestamp: '2022-06-20T12:47:24Z',
      name: 'nodejs-sample-3',
      generation: 1,
      labels: {},
    },
  },
];
